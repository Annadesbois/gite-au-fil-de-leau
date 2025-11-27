import type { Metadata } from "next";

import ReviewForm from "./review-form";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Avis des voyageurs — Gîte Au fil de l'eau à Storckensohn",
  description:
    "Découvrez les avis et témoignages des voyageurs ayant séjourné au gîte Au fil de l'eau à Storckensohn, au cœur des Hautes Vosges d’Alsace.",
};

export const revalidate = 60; // refresh list at most every 60s

const ReviewsPage = async () => {
  const reviews = await prisma.review.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="flex flex-col my-8 items-center">
      <h1 className="relative fabric-surface-light p-4 rounded-3xl">
        Avis des voyageurs
      </h1>

      <ReviewForm />

      <section className="grid gap-4 md:mt-4 max-w-5xl w-full ">
        {reviews.length === 0 && (
          <p className="text-center opacity-70">Aucun avis pour le moment.</p>
        )}

        {reviews.map((r) => (
          <article
            key={r.id}
            className="relative fabric-surface-light p-4 rounded-xl"
          >
            <div className="flex items-center justify-between">
              <p className="font-semibold">{r.name}</p>

              {typeof r.rating === "number" && (
                <p aria-label={`${r.rating} sur 5`} className="text-yellow-600">
                  {"★".repeat(r.rating)}
                  <span className="text-yellow-600/30">
                    {"☆".repeat(5 - r.rating)}
                  </span>
                </p>
              )}
            </div>

            <p className="mt-2 whitespace-pre-line">{r.comment}</p>

            <p className="text-xs opacity-60 mt-2">
              {r.createdAt.toLocaleDateString("fr-FR")}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default ReviewsPage;
