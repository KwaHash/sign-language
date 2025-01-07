import React, { useState, useEffect, useRef, useCallback } from "react";
import { Paper, Box } from "@mui/material";

type VideoDisplayProps = {
  videos: string[];
  counts: number;
};

const VideoDisplay: React.FC<VideoDisplayProps> = ({ videos, counts }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setCurrentIndex(0);
  }, [counts]);

  const handleVideoEnded = useCallback(() => {
    if (currentIndex < videos.length) {
      setCurrentIndex((prevIndex) => (prevIndex + 1));
    } else {
      setCurrentIndex(0);
    }
  }, [videos.length]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.playbackRate = 2;
    }
  }, [currentIndex]);

  return (
    <Paper sx={{ p: 3, maxWidth: 800, mx: "auto" }}>
      <Box
        sx={{
          position: "relative",
          paddingTop: "56.25%",
        }}
      >
        <video
          ref={videoRef}
          src={videos[currentIndex]}
          autoPlay
          onEnded={handleVideoEnded}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            transition: "opacity 0.5s ease",
          }}
        />
      </Box>
    </Paper>
  );
};

export default VideoDisplay;
