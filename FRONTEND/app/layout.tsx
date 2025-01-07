import type { Metadata } from "next";
import Sidebar from "@/components/organisms/Sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "SignLanguage",
  description: "意思の疎通を図ることが難しい方を支援する手段としてITの進化に大きな期待が寄せられています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex bg-[#F7F6EF]">
          <Sidebar />
          {children}
        </div>
      </body>
    </html >
  );
}
