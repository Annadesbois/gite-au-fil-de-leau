"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const ContactForm = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: (formData.get("name") ?? "").toString(),
      email: (formData.get("email") ?? "").toString(),
      message: (formData.get("message") ?? "").toString(),
      website: (formData.get("website") ?? "").toString(), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(json.error || "Une erreur est survenue.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Impossible d’envoyer le message. Veuillez réessayer.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-busy={status === "loading"}
      className="relative fabric-surface-light space-y-6 rounded-xl p-6 md:p-8 max-w-212 w-full shadow-sm"
    >
      <div>
        <label htmlFor="name" className="form-label">
          Nom *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="form-input"
        />
      </div>

      <div>
        <label htmlFor="email" className="form-label">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="form-input"
        />
      </div>

      <div>
        <label htmlFor="message" className="form-label">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="form-input"
        />
      </div>

      {/* Honeypot field – hidden from users */}
      <div className="hidden">
        <label htmlFor="website">Site web (laisser vide)</label>
        <input id="website" name="website" type="text" />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-surface-2 px-6 py-2 font-semibold shadow transition hover:bg-surface-3 cursor-pointer block mx-auto disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Envoi en cours…" : "Envoyer"}
      </button>

      <p aria-live="polite" className="mt-1 min-h-6 text-secondary text-center">
        {status === "success" && "Merci, votre message a bien été envoyé."}
        {status === "error" && errorMessage}
      </p>
    </form>
  );
};

export default ContactForm;
