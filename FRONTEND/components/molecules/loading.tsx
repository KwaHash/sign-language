import React from "react";
import { Commet } from 'react-loading-indicators';

interface Props {
  mlWidth?: number;
}

export default function Loading({ mlWidth = 0 }: Props) {
  return (
    <div
      className={`fixed h-screen flex z-50 items-center justify-center bg-[#f7f6ef]`}
      style={{ width: `calc(100% - ${mlWidth}px)` }}
    >
      <Commet color="#50C300" size="medium" text="" textColor="" />
    </div>
  );
}
