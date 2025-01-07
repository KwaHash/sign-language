import { withDatabase } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const queryStr = `SELECT * FROM mappings`;

    const rows = await withDatabase(async (db) => {
      const [result] = await db.query(queryStr);
      return result;
    });

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error in POST /api/list: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
