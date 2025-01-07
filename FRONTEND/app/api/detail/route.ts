import { withDatabase } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { RowDataPacket } from "mysql2";

interface MappingResult extends RowDataPacket {
  videoUrl: string;
}

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();
    const queryStr = "SELECT videoUrl FROM mappings WHERE word = ?";

    // Specify the type of the result properly
    const [rows] = await withDatabase(async (db) =>
      db.query<MappingResult[]>(queryStr, [token])
    );

    const videoUrl = rows?.[0]?.videoUrl || "";

    return NextResponse.json(videoUrl);
  } catch (error) {
    console.error("Error in POST /api/detail:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
