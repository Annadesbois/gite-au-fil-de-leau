"use client";

import { useActionState } from "react";
import createReview from "./actions";
import Button from "@/components/Button";

const initialState = { ok: false, errors: {} as Record<string, string[]> };

const ReviewForm = () => {
  const [state, formAction, pending] = useActionState(
    createReview,
    initialState
  );

  return (
    <form
      action={formAction}
      className=" relative fabric-surface-light p-6 rounded-xl grid gap-4 max-w-lg mx-auto"
    >
      <h2 className="text-xl font-bold">Laisser un avis</h2>

      <label className="grid gap-1">
        <span>Nom</span>
        <input name="name" className="input" required />
        {state.errors?.name && (
          <p className="text-red-600 text-sm">{state.errors.name[0]}</p>
        )}
      </label>

      <label className="grid gap-1">
        <span>Note</span>
        <select name="rating" className="input" defaultValue={5}>
          {[5, 4, 3, 2, 1].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-1">
        <span>Commentaire</span>
        <textarea name="comment" rows={5} className="input" required />
        {state.errors?.comment && (
          <p className="text-red-600 text-sm">{state.errors.comment[0]}</p>
        )}
      </label>

      {/* Honeypot (hidden field for bots) */}
      <input
        type="text"
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <Button type="submit" disabled={pending}>
        {pending ? "Envoi..." : "Envoyer"}
      </Button>

      {state.ok && (
        <p className="text-sm mt-2">
          Merci ! Votre avis sera publié après validation.
        </p>
      )}
    </form>
  );
};

export default ReviewForm;
