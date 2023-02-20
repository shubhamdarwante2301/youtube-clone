import React from "react";
import { calculateViews } from "../utils/calculateViews";

// const image ="https://i.ytimg.com/vi/jvoOgxK4EvI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3-6lAZ85ANpKpMSz1aU_RY1-rPA";

const VideoCard = ({video}) => {
  const THUMBNAIL = (video.thumbnails.length >= 2) ? video.thumbnails[1].url : video.thumbnails[0].url;
  
  return (
    <div className="cursor-pointer mb-6 md:hover:scale-110">
      <div>
        <img src={THUMBNAIL} alt="video thumbnail" className="rounded-xl" />
      </div>
      <div className="flex items-start mt-2">
        <div className="mr-3">
          <div className="bg-red rounded-full w-8 h-8">
            <img src={video.author.avatar[0].url} alt="Avtar" className="rounded-full"/>
          </div>
        </div>
        <div>
          <p
            className="font-semibold leading-5 tracking-tight"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Tooltip on bottom"
          >
            {video.title}
          </p>
          <div className="mt-1 text-gray-400 text-sm">
            <p>{video.author.title}</p>
            <p><span>{calculateViews(video.stats.views)}</span> . <span>{video.publishedTimeText}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
