import React from 'react';
import { FaUpload } from "react-icons/fa";

type VideoUploaderProps = {
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
};

export function VideoUploader({ onFileChange, inputRef }: VideoUploaderProps) {
  return (
    <label
      htmlFor="video-upload"
      className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
    >
      <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <FaUpload className="w-12 h-12 mb-4 text-gray-500" />
        <p className="mb-2 text-sm text-gray-500">
          <span className="font-semibold">クリックしてアップロードする</span> か、ドラッグアンドドロップしてください
        </p>
        <p className="text-xs text-gray-500">MP4、WebM、Ogg（最大100MB）</p>
      </div>
      <input
        ref={inputRef}
        id="video-upload"
        type="file"
        className="hidden"
        accept="video/*"
        onChange={onFileChange}
      />
    </label>
  );
}