import React from 'react';
import { Paper } from '@mui/material';
// import { VideoUpload } from '../components/VideoUpload';
// import type { Video } from '../types/video';


const RegisterPage = () => {
  return (
    <div className="flex flex-col p-10 w-full">
      <h2 className='border-m-green border-l-[6px] pl-2 text-2xl font-bold'>手話登録</h2>
      <div className="bg-white w-full flex-grow p-5 mt-5">
        {/* <VideoUpload onRegister={onVideoRegister} /> */}
      </div>
    </div>
  );
}

export default RegisterPage;