"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import ListPage from "@/features/ListPage";
import type { Video } from "@/utils/types";

export default async function Page() {
  return (
    <main className="flex min-h-screen grow ml-[250px]">
      <ListPage />
    </main>
  );
}
