import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex justify-center items-center py-3">
      <Image src="/imgs/logo.png" alt="Logo" width={70} height={70} />
      <div className="flex flex-col ml-3">
        <span className="text-xl font-bold">手話アプリ</span>
      </div>
    </div>
  );
}

export default Logo;