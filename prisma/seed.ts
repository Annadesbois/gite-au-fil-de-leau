import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

import legacyReviews from "./legacy-reviews.json" assert { type: "json" };

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const main = async() => {
  console.log(`Importing ${legacyReviews.length} legacy reviews...`);

  for (const r of legacyReviews) {
    await prisma.review.create({
      data: {
        name: r.name,
        comment: r.comment,
        createdAt: new Date(r.createdAt),
        approved: true,
        source: "legacy",
        ...(r.rating !== undefined ? { rating: r.rating } : {}),
      },
    });
  }

  console.log("Done importing legacy reviews.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
