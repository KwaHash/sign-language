'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Paper, Divider } from '@mui/material';

import Logo from '@/components/atoms/Logo';
import { RiSnapchatFill } from "react-icons/ri";
import { PiListBulletsFill } from "react-icons/pi";
import { GiArchiveRegister } from "react-icons/gi";

const menues = [
  { label: '手話チャット', icon: <RiSnapchatFill />, link: '/' as const },
  { label: '手話一覧', icon: <PiListBulletsFill />, link: 'list' as const },
  { label: '手話登録', icon: <GiArchiveRegister />, link: 'create' as const },
];

const Sidebar = () => {
  const [topic, setTopic] = useState<string>('手話チャット');
  return (
    <Paper
      elevation={1}
      sx={{
        width: 250,
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        borderRadius: 0,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Logo />
      <Divider />

      {menues.map((item, index) => (
        <div key={index}>
          <Link
            className={`w-full flex items-center pl-8 py-4 ${topic === item.label ? 'bg-[#edf8d2]' : ''}`}
            href={item.link}
            onClick={() => setTopic(item.label)}
          >
            <span className="mr-4 text-3xl">{item.icon}</span>
            <span className='font-bold'>{item.label}</span>
          </Link>
          <Divider />
        </div>
      ))}
    </Paper>
  );
}

export default Sidebar;