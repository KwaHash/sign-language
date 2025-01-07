import axios from "axios";
import ListPage from "@/features/ListPage";
import type { Video } from "@/utils/types";

export default async function Page() {
  const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/list`);
  const videos = res.data as Video[];
  return (
    <main className="flex min-h-screen grow ml-[250px]">
      <ListPage videos={videos} />
    </main>
  );
}