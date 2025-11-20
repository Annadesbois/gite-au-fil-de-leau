"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
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
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-busy={status === "loading"}
      className="space-y-4 rounded-xl border border-surface-3/20 bg-surface-1/60 p-4 md:p-6 shadow-sm"
    >
      <div>
        <label
          htmlFor="name"
          className="mb-1 block text-sm font-semibold text-primary"
        >
          Nom *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-surface-3/40 bg-white/80 px-3 py-2 text-primary shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1 block text-sm font-semibold text-primary"
        >
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-surface-3/40 bg-white/80 px-3 py-2 text-primary shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-sm font-semibold text-primary"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-surface-3/40 bg-white/80 px-3 py-2 text-primary shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
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
        className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-2 text-sm font-semibold text-primary shadow transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Envoi en cours…" : "Envoyer"}
      </button>

      <p aria-live="polite" className="mt-1 min-h-6 text-sm text-secondary">
        {status === "success" && "Merci, votre message a bien été envoyé."}
        {status === "error" && errorMessage}
      </p>
    </form>
  );
}
