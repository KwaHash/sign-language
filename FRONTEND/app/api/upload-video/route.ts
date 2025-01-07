import path from "path";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { formatDateTime, getFileExtension } from "@/utils/convert";

export async function POST(req: NextRequest) {
  try {
    const video = (await req.formData()).get("video");

    if (!video || !(video instanceof File)) {
      return NextResponse.json(
        { error: "No files received or incorrect type." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await video.arrayBuffer());
    const videoName = `${formatDateTime()}${getFileExtension(video.name)}`;
    const videoPath = path.join(process.cwd(), "public/videos", videoName);

    await writeFile(videoPath, buffer);

    const videoUrl = `/videos/${videoName}`;
    return NextResponse.json({ url: videoUrl });
  } catch (error) {
    console.error("Error occurred while saving the file: ", error);
    return NextResponse.json(
      { error: "Failed to upload image." },
      { status: 500 }
    );
  }
}
