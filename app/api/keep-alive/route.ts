import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const auth = req.headers.get("authorization");
    const bearer = auth?.startsWith("Bearer ")
      ? auth.slice("Bearer ".length)
      : null;

    const cronSecret = process.env.CRON_SECRET;
    const keepAliveToken = process.env.KEEP_ALIVE_TOKEN;
    const headerToken = req.headers.get("x-keep-alive-token");

    const okViaCron = Boolean(cronSecret && bearer && bearer === cronSecret);
    const okViaHeader = Boolean(
      keepAliveToken && headerToken && headerToken === keepAliveToken
    );

    if (!okViaCron && !okViaHeader) {
      return NextResponse.json(
        { ok: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    await prisma.review.count();

    return NextResponse.json({ ok: true, ts: new Date().toISOString() });
  } catch (error) {
    console.error("keep-alive error:", error);
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
