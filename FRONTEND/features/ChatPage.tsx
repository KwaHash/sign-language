"use client";

import React, { useState } from 'react';
import VideoSkeleton from '@/components/molecules/VideoSkeleton';
import { ChatInput } from '@/components/molecules/ChatInput';

const ChatPage = () => {
  const [displayVideos, setDisplayVideos] = useState<string[]>([]);
  const handleClick = (text: string) => {
    
  };

  return (
    <div className="flex flex-col p-10 w-full">
      <h2 className='border-m-green border-l-[6px] pl-2 text-2xl font-bold'>手話チャット</h2>
      <div className="bg-white w-full flex-grow pt-16 mt-10">
        <VideoSkeleton />
        <ChatInput onClick={handleClick} />
      </div>
    </div>
  )
}

export default ChatPage;