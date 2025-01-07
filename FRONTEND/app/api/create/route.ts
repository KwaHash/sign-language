import { withDatabase } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { title, videoUrl } = await req.json();
    const queryStr = `INSERT INTO mappings (title, videoUrl) VALUES (?, ?)`;

    const lastInsertedId = await withDatabase(async (db) => {
      const [result] = await db.execute(queryStr, [title, videoUrl]);
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
