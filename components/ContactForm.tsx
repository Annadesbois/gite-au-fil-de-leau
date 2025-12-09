"use client";

import { FormEvent, useState } from "react";

import Button from "./Button";

import { ContactFormProps } from "@/types/i18n";

type Status = "idle" | "loading" | "success" | "error";

const ContactForm = ({ formMessages }: ContactFormProps) => {
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
      <h2 className="text-center font-bold pb-4">{formMessages.title}</h2>
      <div>
        <label htmlFor="name" className="form-label">
          {formMessages.name} *
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
          {formMessages.message} *
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

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? formMessages.sending : formMessages.send}
      </Button>
      <p aria-live="polite" className="mt-1 min-h-6 text-secondary text-center">
        {status === "success" && formMessages.success}
        {status === "error" && errorMessage}
      </p>
    </form>
  );
};

export default ContactForm;
