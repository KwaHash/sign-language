import React from 'react';
import { IoCloseCircle } from "react-icons/io5";

import type { Video } from '@/utils/types';

type VideoModalProps = {
  video: Video;
  onClose: () => void;
};

const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={handleBackdropClick}>
      <div className="relative bg-[#f7f6ef] rounded-lg w-full max-w-4xl mx-4 p-5">
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 p-1 bg-gray-800 text-white rounded-full hover:bg-[#1976d2] duration-300 ease-out transition-colors z-10 shadow-md"
          aria-label="Close video"
        >
          <IoCloseCircle className="w-6 h-6" />
        </button>

        <div className="p-4">
          <div className='flex items-center mb-4 bg-white rounded-sm'>
            <p className='bg-[#d1f292] px-8 py-3'>手話</p>
            <h3 className="p-3 font-semibold">{video.title}</h3>
          </div>
          <video
            src={video.videoUrl}
            className="w-full rounded-lg aspect-video"
            autoPlay
            loop
            controls
            playsInline
          />
        </div>
      </div>
    </div>
  );
}

export default VideoModal;