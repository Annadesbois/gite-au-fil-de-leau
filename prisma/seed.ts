import { PrismaClient } from "@prisma/client";
import legacyReviews from "./legacy-reviews.json" assert { type: "json" };

const prisma = new PrismaClient();

const main = async() => {
  console.log(`Importing ${legacyReviews.length} legacy reviews...`);

  for (const r of legacyReviews) {
    await prisma.review.create({
      data: {
        name: r.name,
        comment: r.comment,
        createdAt: r.createdAt,
        approved: true,
        source: "legacy",
        ...(r.rating !== undefined ? { rating: r.rating } : {}),
      },
    });
  }

  console.log("Done importing legacy reviews.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
