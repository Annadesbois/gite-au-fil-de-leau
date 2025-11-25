"use server";

import { prisma } from "@/lib/prisma";
import { z } from "zod";

const reviewSchema = z.object({
  name: z.string().min(2).max(60),
  rating: z.coerce.number().int().min(1).max(5),
  comment: z.string().min(10).max(1000),
  website: z.string().optional(), // honeypot
});

const createReview = async(
  prevState: { ok: boolean; errors?: Record<string, string[]> },
  formData: FormData
) => {
  const raw = Object.fromEntries(formData.entries());
  const parsed = reviewSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      ok: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

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
}

export default createReview;