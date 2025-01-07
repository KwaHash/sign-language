import axios from "axios";
import ListPage from "@/features/ListPage";
import type { Video } from "@/utils/types";

export default async function Page() {
  try {
    // Fetch data server-side during rendering
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/list`);
    const videos = res.data as Video[];

    return (
      <main className="flex min-h-screen grow ml-[250px]">
        <ListPage videos={videos} />
      </main>
    );
  } catch (error) {
    console.error("Error fetching videos:", error);
    return (
      <main className="flex min-h-screen grow ml-[250px]">
        <ListPage videos={[]} /> {/* Empty list in case of error */}
      </main>
    );
  }
}
