import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import type { Video } from '@/utils/types';

type VideoDisplayProps = {
  video: Video;
};

export function VideoDisplay({ video }: VideoDisplayProps) {
  return (
    <Paper sx={{ p: 3, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        {video.title}
      </Typography>
      <Box sx={{ position: 'relative', paddingTop: '56.25%', mb: 2 }}>
        <video
          src={video.videoUrl}
          controls
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </Box>
    </Paper>
  );
}