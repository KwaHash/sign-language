import { withDatabase } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();
    const queryStr = "SELECT videoUrl FROM mappings WHERE word = ?";

    const [result] = (await withDatabase(async (db) =>
      db.query(queryStr, [token])
    )) as any;
    const videoUrl = result?.[0]?.videoUrl || "";

    return NextResponse.json(videoUrl);
  } catch (error) {
    console.error("Error in POST /api/detail:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
