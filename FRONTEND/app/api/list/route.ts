import { withDatabase } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const queryStr = `
      SELECT videoUrl, GROUP_CONCAT(word ORDER BY word SEPARATOR '、') AS title
      FROM mappings
      GROUP BY videoUrl
    `;

    const rows = await withDatabase(async (db) => {
      const [result] = await db.query(queryStr);
      return result;
    });

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error in POST /api/list:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
