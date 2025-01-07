import React, { useState } from 'react';
import { BsFillSendFill } from "react-icons/bs";
import { Paper, InputBase, IconButton } from '@mui/material';

type ChatInputProps = {
  onClick: (text: string) => void;
};

export function ChatInput({ onClick }: ChatInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onClick(input.trim());
      setInput('');
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: '2px',
        display: 'flex',
        alignItems: 'center',
        maxWidth: 800,
        mx: 'auto',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        border: '1px solid #e9ecef',
        marginTop: "20px",
        '&:hover': {
          borderColor: '#dee2e6',
        },
        '&:focus-within': {
          borderColor: '#3b82f6',
          boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.1)'
        }
      }}
    >
      <InputBase
        sx={{
          ml: 2,
          flex: 1,
          fontFamily: "-apple-system, BlinkMacSystemFont, Helvetica Neue, Yu Gothic, Verdana, Meiryo, sans-serif",
          '& input': {
            padding: '10px 0',
          },
          '&::placeholder': {
            color: '#adb5bd'
          }
        }}
        placeholder="メッセージの内容を入力"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <IconButton
        type="submit"
        size="small"
        sx={{
          bgcolor: '#3b82f6',
          color: 'white',
          m: 0.5,
          minWidth: '32px',
          height: '32px',
          transition: 'background-color 0.3s ease-out',
          '&:hover': {
            bgcolor: '#2563eb'
          },
          '& svg': {
            width: '16px',
            height: '16px'
          }
        }}
        title="手話に翻訳"
      >
        <BsFillSendFill />
      </IconButton>
    </Paper>
  );
}