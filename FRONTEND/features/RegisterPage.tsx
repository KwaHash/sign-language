import React from 'react';
import { VideoUpload } from '@/components/organisms/VideoUpload';
// import { VideoUpload } from '../components/VideoUpload';
// import type { Video } from '../types/video';


const RegisterPage = () => {
  return (
    <div className="flex flex-col p-10 w-full">
      <h2 className='border-m-green border-l-[6px] pl-2 text-2xl font-bold'>手話登録</h2>
      <div className="bg-white w-full flex-grow pt-16 mt-10">
        <VideoUpload />
      </div>
    </div>
  );
}

export default RegisterPage;