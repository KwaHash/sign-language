"use client";

import React, { useState } from 'react';
import axios from 'axios';
import VideoSkeleton from '@/components/molecules/VideoSkeleton';
import VideoDisplay from '@/components/molecules/VideoDisplay';
import { ChatInput } from '@/components/molecules/ChatInput';
import NoVideoDialog from '@/components/molecules/NoVideoDialog';

const ChatPage = () => {
  const [displayVideos, setDisplayVideos] = useState<string[]>([]);
  const [counts, setCounts] = useState<number>(0);
  const [open, setOpen] = useState(false);

  const handleClick = async (text: string) => {
    const res = await axios.post('/tokenize/tokens', { text });
    if (res.status === 200) {
      const tokens = res.data as string[];
      console.log("tokens: ", tokens);
      const videoUrls = await Promise.all(
        tokens.map(async (token) => {
          const { status, data: videoUrl } = await axios.post('/api/detail', { token });
          return status === 200 && videoUrl ? videoUrl : null;
        })
      );
      const validVideoUrls = videoUrls.filter(Boolean);
      if (validVideoUrls.length === 0) {
        setOpen(true);
      }
      setDisplayVideos(validVideoUrls);
      console.log("urls: ", validVideoUrls);
      setCounts(prev => prev + 1);
    }
  };

  return (
    <div className="flex flex-col p-10 w-full">
      <h2 className='border-m-green border-l-[6px] pl-2 text-2xl font-bold'>手話チャット</h2>
      <div className="bg-white w-full flex-grow pt-16 mt-10">
        {displayVideos.length ? <VideoDisplay videos={displayVideos} counts={counts} /> : <VideoSkeleton />}
        <ChatInput onClick={handleClick} />
        <NoVideoDialog open={open} setOpen={setOpen} />
      </div>
    </div>
  )
}

export default ChatPage;