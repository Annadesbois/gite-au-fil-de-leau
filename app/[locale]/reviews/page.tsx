import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import type { Review } from "@prisma/client";

import ReviewForm from "./review-form";

export const metadata: Metadata = {
  title: "Avis des voyageurs — Gîte Au fil de l'eau à Storckensohn",
  description:
    "Découvrez les avis et témoignages des voyageurs ayant séjourné au gîte Au fil de l'eau à Storckensohn, au cœur des Hautes Vosges d’Alsace.",
};

export const dynamic = "force-dynamic";
export const revalidate = 60; // refresh list at most every 60s

const ReviewsPage = async () => {
  let reviews: Review[] = [];
  let error = null;

  try {
    reviews = await prisma.review.findMany({
      where: { approved: true },
      orderBy: { createdAt: "desc" },
    });
  } catch (e) {
    console.error("Database error:", e);
    error = "Impossible de charger les avis pour le moment.";
  }

  return (
    <div className="page-layout">
      <h1 className="fabric-surface-light title-block">
        Avis des voyageurs
      </h1>

      <ReviewForm />

      <section className="grid gap-4 md:mt-4 max-w-5xl w-full ">
        {error && (
          <p className="text-center text-red-800 p-4 bg-red-50 rounded-lg">
            {error}
          </p>
        )}

        {!error && reviews.length === 0 && (
          <p className="text-center opacity-70">Aucun avis pour le moment.</p>
        )}

        {!error &&
          reviews.map((r: (typeof reviews)[number]) => (
            <article
              key={r.id}
              className="relative fabric-surface-light p-4 rounded-xl"
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold">{r.name}</p>

                {typeof r.rating === "number" && (
                  <p
                    aria-label={`${r.rating} sur 5`}
                    className="text-yellow-600"
                  >
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
