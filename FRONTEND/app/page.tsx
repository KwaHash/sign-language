import axios from "axios";
import ChatPage from "@/features/ChatPage";

export default async function Page() {
  return (
    <main className="flex min-h-screen grow ml-[250px]">
      <ChatPage />
    </main>
  );
}