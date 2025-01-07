"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import ListPage from "@/features/ListPage";
import type { Video } from "@/utils/types";

export default async function Page() {
  const [videos, setVideos] = useState<Video[]>([]);
  useEffect(() => {
    const fetchSigns = async () => {
      const res = await axios.post('/api/list');
      if (res.status === 200) {
        setVideos(res.data as Video[]);
      }
    }
    fetchSigns();
  }, [])

  return (
    <main className="flex min-h-screen grow ml-[250px]">
      <ListPage videos={videos} />
    </main>
  );
}
