import React from "react";

const image =
  "https://i.ytimg.com/vi/jvoOgxK4EvI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3-6lAZ85ANpKpMSz1aU_RY1-rPA";

const VideoCard = () => {
  return (
    <div className="cursor-pointer mb-6 md:hover:scale-110">
      <div>
        <img src={image} alt="video thumbnail" className="rounded-xl" />
      </div>
      <div className="flex items-start mt-2">
        <div className="mr-3">
          <div className="p-5 bg-red rounded-full"></div>
        </div>
        <div>
          <p
            className="font-semibold leading-5 tracking-tight"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Tooltip on bottom"
          >
            Lorem ipsum dolor sit amet consectetur
          </p>
          <div className="mt-1 text-gray-400 text-sm">
            <p>shubham darwante</p>
            <p>73.72k views.Streamed 2 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
