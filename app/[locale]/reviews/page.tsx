import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import type { Review } from "@prisma/client";

import ReviewForm from "./review-form";
import { getMessages, type Locale } from "@/lib/i18n";
import type { ReviewsMessages, ReviewFormMessages } from "@/types/i18n";

type ReviewsPageProps = {
  params: Promise<{ locale: Locale }>;
};

export const generateMetadata = async ({
  params,
}: ReviewsPageProps): Promise<Metadata> => {
  const { locale } = await params;
  const messages = getMessages(locale);
  const reviews = messages.reviews as ReviewsMessages;

  return {
    title: reviews.meta.title,
    description: reviews.meta.description,
  };
};

export const dynamic = "force-dynamic";
export const revalidate = 60; // refresh list at most every 60s

const ReviewsPage = async ({ params }: ReviewsPageProps) => {
  const { locale } = await params;
  const messages = getMessages(locale);

  const reviewsMessages = messages.reviews as ReviewsMessages;
  const reviewFormMessages = messages.reviewForm as ReviewFormMessages;

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
        {reviewsMessages.title}
      </h1>

      <ReviewForm messages={reviewFormMessages} />

      <section className="grid gap-4 md:mt-4 max-w-5xl w-full ">
        {error && (
          <p className="text-center text-red-800 p-4 bg-red-50 rounded-lg">
            {error}
          </p>
        )}

        {!error && reviews.length === 0 && (
          <p className="text-center opacity-70">{reviewsMessages.empty}</p>
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
