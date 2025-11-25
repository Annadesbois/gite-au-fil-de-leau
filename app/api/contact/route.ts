import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const POST = async(req: Request) => {
  try {
    // Parse JSON body
    const { name, email, message, website } = (await req.json()) as {
      name?: string;
      email?: string;
      message?: string;
      website?: string; // honeypot
    };

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires." },
        { status: 400 }
      );
    }

    // Honeypot (if filled, treat as spam and silently succeed)
    if (website && website.trim() !== "") {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Check configuration
    if (!process.env.EMAIL_FROM || !process.env.EMAIL_TO) {
      console.error("Missing EMAIL_FROM or EMAIL_TO env var");
      return NextResponse.json(
        {
          error:
            "Le serveur n’est pas correctement configuré pour l’envoi d’email.",
        },
        { status: 500 }
      );
    }

    // Send the email
    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      subject: `Nouveau message depuis le site du gîte – ${name}`,
      replyTo: email,
      text: `
Nom : ${name}
Email : ${email}

Message :
${message}
  `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          error:
            "Désolé, une erreur est survenue lors de l’envoi du message. Veuillez réessayer plus tard.",
        },
        { status: 500 }
      );
    }

    // OK
    return NextResponse.json(
      { success: true, message: "Message envoyé avec succès, merci !" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      {
        error:
          "Une erreur inattendue s’est produite. Veuillez réessayer plus tard.",
      },
      { status: 500 }
    );
  }
}

export { POST };