"use client";

import React, { useState } from 'react';
import VideoUpload from '@/components/organisms/VideoUpload';
import Loading from '@/components/molecules/loading';

const RegisterPage = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  return (
    isLoading ? <Loading mlWidth={250} /> : (
      <div className="flex flex-col p-10 w-full">
        <h2 className='border-m-green border-l-[6px] pl-2 text-2xl font-bold'>手話登録</h2>
        <div className="bg-white w-full flex-grow pt-16 mt-10">
          <VideoUpload setLoading={setLoading} />
        </div>
      </div>
    )
  );
}

export default RegisterPage;