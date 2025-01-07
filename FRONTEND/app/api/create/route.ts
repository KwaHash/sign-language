import { withDatabase } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { ResultSetHeader } from "mysql2";

export async function POST(req: NextRequest) {
  try {
    const { word, videoUrl } = await req.json();
    const queryStr = `INSERT INTO mappings (word, videoUrl) VALUES (?, ?)`;

    const lastInsertedId = await withDatabase(async (db) => {
      const [result] = await db.execute<ResultSetHeader>(queryStr, [
        word,
        videoUrl,
      ]);
      return result.insertId;
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
