import React from 'react';
import { Paper, Box, Skeleton } from '@mui/material';

const VideoSkeleton = () => {
  return (
    <Paper sx={{ p: 3, maxWidth: 800, mx: 'auto' }}>
      <Box sx={{ position: 'relative', paddingTop: '56.25%', mb: 2 }}>
        <Skeleton
          variant="rectangular"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: 1
          }}
        />
      </Box>
    </Paper>
  );
}

export default VideoSkeleton;