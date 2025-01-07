import React from 'react';

import type { Video } from '@/utils/types';

type VideoCardProps = {
  index: number;
  video: Video;
  onSelect: (video: Video) => void;
};

const VideoCard: React.FC<VideoCardProps> = ({ index, video, onSelect }) => {
  return (
    <tr
      onClick={() => onSelect(video)}
      className={`w-full shadow-sm hover:shadow-md transition-all duration-300 ease-out cursor-pointer h-[100px] overflow-hidden ${index % 2 ? 'bg-[#c2de8f] bg-opacity-20' : 'bg-white'
        }`}
    >
      <td className="flex-1 p-6 border-r text-sm">
        {video.title}
      </td>
      <td className="w-[250px] h-full relative flex-shrink-0 py-2">
        <video
          src={video.videoUrl}
          className="w-full h-full object-cover"
        />
      </td>
    </tr>
  );
}

export default VideoCard;