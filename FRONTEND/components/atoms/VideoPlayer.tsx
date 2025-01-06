import React from 'react';
import { IoCloseCircle } from "react-icons/io5";

type VideoPlayerProps = {
  videoUrl: string;
  fileName: string;
  fileSize: number;
  onClear: () => void;
};

export function VideoPlayer({ videoUrl, fileName, fileSize, onClear }: VideoPlayerProps) {
  return (
    <div className="relative bg-white rounded-lg shadow-lg p-4">
      <button
        onClick={onClear}
        className="absolute -top-5 -right-5 p-1 bg-gray-800 text-white rounded-full hover:bg-m-green duration-300 ease-out transition-colors z-10 shadow-md"
        aria-label="Close video"
      >
        <IoCloseCircle className="w-6 h-6" />
      </button>
      <video
        controls
        className="w-full rounded-lg"
        src={videoUrl}
      >
        ブラウザはビデオタグをサポートしていません。
      </video>
      <div className="mt-4">
        <p className="text-sm text-gray-600">
          ファイル名：{fileName}
        </p>
        <p className="text-sm text-gray-600">
          サイズ：{(fileSize / (1024 * 1024)).toFixed(2)} MB
        </p>
      </div>
    </div>
  );
}