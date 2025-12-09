"use client";

import { useActionState } from "react";

import Button from "@/components/Button";
import createReview from "@/app/[locale]/reviews/actions";

import type { ReviewFormMessages } from "@/types/i18n";

type ReviewFormProps = {
  messages: ReviewFormMessages;
};

const initialState = { ok: false, errors: {} as Record<string, string[]> };

const ReviewForm = ({ messages }: ReviewFormProps) => {
  const [state, formAction, pending] = useActionState(
    createReview,
    initialState
  );

  return (
    <form
      action={formAction}
      className="relative fabric-surface-light max-w-3xl w-full p-6 rounded-xl grid gap-6 mx-auto mb-8"
    >
      <h2 className="text-xl font-bold">{messages.title}</h2>

      <label className="grid gap-1">
        <span>{messages.name}</span>
        <input name="name" className="border rounded-md p-2" required />
        {state.errors?.name && (
          <p className="text-red-800 font-semibold text-sm">
            {state.errors.name[0]}
          </p>
        )}
      </label>

      <label className="grid gap-1">
        <span>{messages.rating}</span>
        <select
          name="rating"
          className="border rounded-md p-2"
          defaultValue={5}
        >
          {[5, 4, 3, 2, 1].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-1">
        <span>{messages.comment}</span>
        <textarea
          name="comment"
          rows={5}
          className="border rounded-md p-2"
          required
        />
        {state.errors?.comment && (
          <p className="text-red-800 font-semibold text-sm">
            {state.errors.comment[0]}
          </p>
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
        {pending ? messages.sending : messages.send}
      </Button>

      {state.ok && <p className="text-sm mt-2">{messages.success}</p>}
    </form>
  );
};

export default ReviewForm;
