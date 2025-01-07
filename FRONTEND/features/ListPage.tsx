"use client";

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaPlus } from "react-icons/fa6";

import VideoCard from '@/components/molecules/VideoCard';
import VideoModal from '@/components/molecules/VideoModal';
import Loading from '@/components/molecules/loading';
import type { Video } from '@/utils/types';

const ListPage: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSigns = async () => {
      const res = await axios.post('/api/list');
      if (res.status === 200) {
        setVideos(res.data as Video[]);
      }
      setIsLoading(false);
    }
    fetchSigns();
  }, [])

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
  };

  return (
    isLoading ? <Loading mlWidth={250} /> : (
      <div className="flex flex-col p-10 w-full">
        <h2 className='border-m-green border-l-[6px] pl-2 text-2xl font-bold'>手話一覧</h2>
        <div className="flex justify-center mt-8">
          <Link href="/create"
            className="flex items-center px-7 py-[6px] rounded-[1px] bg-m-blue hover:opacity-90 text-white transition-all duration-300 ease-out"
          >
            <FaPlus className="text-xl" />
            <span className="text-xl ml-1">新しい手話を登録</span>
          </Link>
        </div>
        <div className="bg-white w-full flex-grow p-5 pt-16 mt-6">
          {videos.length ? (
            <table className="w-full">
              <thead>
                <tr className='font-bold'>
                  <th className=" bg-m-blue p-3 text-white">手話</th>
                  <th className="w-[250px] bg-m-blue p-3 text-white">サンプル動画</th>
                </tr>
              </thead>
              <tbody>
                {videos.map((video, index) => (
                  <VideoCard
                    key={index}
                    index={index}
                    video={video}
                    onSelect={handleVideoSelect}
                  />
                ))}
              </tbody>
            </table>
          ) : (
            <p className="bg-[#fcf8e3] border-[#faebcc] border-[1px] p-4 rounded-sm">
              ビデオがありません。
            </p>
          )}
        </div>

        {selectedVideo && (
          <VideoModal
            video={selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </div>
    )
  )
}

export default ListPage;