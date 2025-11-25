"use server";

import { prisma } from "@/lib/prisma";
import { z } from "zod";

const reviewSchema = z.object({
  name: z.string().min(2).max(60),
  rating: z.coerce.number().int().min(1).max(5),
  comment: z.string().min(10).max(1000),
  website: z.string().optional(), // honeypot
});

type ReviewFormState = {
  ok: boolean;
  errors?: Record<string, string[]>;
};

const toFieldErrors = (error: z.ZodError): Record<string, string[]> => {
  const fieldErrors: Record<string, string[]> = {};

  for (const issue of error.issues) {
    const field = issue.path[0];
    if (!field) continue;

    const key = String(field);
    if (!fieldErrors[key]) {
      fieldErrors[key] = [];
    }
    fieldErrors[key].push(issue.message);
  }

  return fieldErrors;
};

const createReview = async (
  _prevState: ReviewFormState,
  formData: FormData
): Promise<ReviewFormState> => {
  const raw = Object.fromEntries(formData.entries());
  const parsed = reviewSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      ok: false,
      errors: toFieldErrors(parsed.error),
    };
  }

  // Honeypot: if filled, silently act as if everything went fine
  if (parsed.data.website && parsed.data.website.trim() !== "") {
    return { ok: true };
  }

  await prisma.review.create({
    data: {
      name: parsed.data.name,
      rating: parsed.data.rating,
      comment: parsed.data.comment,
      approved: false,
      source: "website",
    },
  });

  return { ok: true };
};

export default createReview;
export type { ReviewFormState };
