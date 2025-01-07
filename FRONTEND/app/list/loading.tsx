import React from "react";
import { Commet } from 'react-loading-indicators';

export default function Loading() {
  return (
    <div
      className={`fixed h-screen flex z-50 items-center justify-center bg-[#f7f6ef] bg-opacity-100 ml-[250px]`}
      style={{ width: `calc(100% - 250px)` }}
    >
      <Commet color="#50C300" size="medium" />
    </div>
  );
}
