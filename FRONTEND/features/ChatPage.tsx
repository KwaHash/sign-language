"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoSkeleton from '@/components/molecules/VideoSkeleton';
import VideoDisplay from '@/components/molecules/VideoDisplay';
import { ChatInput } from '@/components/molecules/ChatInput';

const ChatPage = () => {
  const [displayVideos, setDisplayVideos] = useState<string[]>([]);
  const [counts, setCounts] = useState<number>(0);
  const handleClick = async (text: string) => {
    setCounts(prev => prev + 1);
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tokenize`, { text });
    if (res.status === 200) {
      const tokens = res.data as string[];
      console.log("here => ", tokens);
      const videoUrls = await Promise.all(
        tokens.map(async (token) => {
          const { status, data: videoUrl } = await axios.post('/api/detail', { token });
          return status === 200 && videoUrl ? videoUrl : null;
        })
      );
      setDisplayVideos(videoUrls.filter(Boolean));
    }
  };

  return (
    <div className="flex flex-col p-10 w-full">
      <h2 className='border-m-green border-l-[6px] pl-2 text-2xl font-bold'>手話チャット</h2>
      <div className="bg-white w-full flex-grow pt-16 mt-10">
        {displayVideos.length ? <VideoDisplay videos={displayVideos} counts={counts} /> : <VideoSkeleton />}
        <ChatInput onClick={handleClick} />
      </div>
    </div>
  )
}

export default ChatPage;