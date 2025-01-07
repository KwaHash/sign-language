'use client';

import React, { useState, useRef } from 'react';
import Button from "@mui/material/Button";

import { VideoUploader } from '@/components/atoms/VideoUploader';
import { VideoPlayer } from '@/components/atoms/VideoPlayer';
import { TextInput } from '@/components/atoms/TextInput';
// import type { Video } from '../types/video';

// type VideoUploadProps = {
//   onRegister: (video: Omit<Video, 'id' | 'createdAt'>) => void;
// };

// export function VideoUpload({ onRegister }: VideoUploadProps) {
export function VideoUpload() {
  const [title, setTitle] = useState<string>('');
  const [video, setVideo] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      setVideo(file);
      setVideoUrl(URL.createObjectURL(file));
    } else {
      alert('有効なビデオファイルを選択してください');
    }
  };

  const clearVideo = () => {
    setVideo(null);
    setVideoUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleRegister = () => {
    if (!video || !videoUrl || !title.trim()) {
      alert('タイトルとビデオの両方を入力してください');
      return;
    }

    // onRegister({
    //   title: title.trim(),
    //   fileName: video.name,
    //   fileSize: video.size,
    //   videoUrl,
    // });

    setTitle('');
    clearVideo();
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <TextInput
        value={title}
        onChange={setTitle}
      />

      {!video && (
        <div className="mb-8">
          <VideoUploader
            onFileChange={handleFileChange}
            inputRef={fileInputRef}
          />
        </div>
      )}

      {video && videoUrl && (
        <VideoPlayer
          videoUrl={videoUrl}
          fileName={video.name}
          fileSize={video.size}
          onClear={clearVideo}
        />
      )}

      <div className="mt-8 flex justify-center">
        <Button
          variant="contained"
          onClick={handleRegister}
          disabled={!video || !title.trim()}
          sx={{
            padding: '5px 30px',
            fontSize: '20px',
            borderRadius: '1px',
            fontFamily: "-apple-system, BlinkMacSystemFont, Helvetica Neue, Yu Gothic, Verdana, Meiryo, sans-serif"
          }}
        >
          登録する
        </Button>
      </div>
    </div>
  );
}