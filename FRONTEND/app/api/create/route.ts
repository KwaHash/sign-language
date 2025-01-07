import { withDatabase } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { word, videoUrl } = await req.json();
    const queryStr = `INSERT INTO mappings (word, videoUrl) VALUES (?, ?)`;

    const lastInsertedId = await withDatabase(async (db) => {
      const [result] = await db.execute(queryStr, [word, videoUrl]);
      return (result as any).insertId;
    });

    return NextResponse.json({ lastInsertedId });
  } catch (error) {
    console.error("Error in POST /api/create: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
