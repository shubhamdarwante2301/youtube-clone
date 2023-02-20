import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";

const VideoDetails = ({VideoInfo}) => {
  return (
    <div className="mt-4">
        {/* video title */}
      <h1 className="md:text-2xl font-semibold">
        {VideoInfo?.title}
      </h1>

      <div className="flex justify-between flex-col sm:flex-row mt-4">
          {/* channel name and subscriber count */}
        <div className="flex items-center mb-4">
          <div>
            <div className="rounded-full bg-red">
              <img src={VideoInfo?.author?.avatar?.[0]?.url} alt="avatar" className="rounded-full"/>
            </div>
          </div>
          <div className="ml-4">
            <p>
              {VideoInfo?.author?.title}
            </p>
            <p className="text-gray-400">
              {VideoInfo?.author?.stats?.subscribersText}
            </p>
          </div>
          <div className="bg-red ml-4 px-5 py-2 rounded-full text-md">
              Subscribe
          </div>
        </div>

        {/* like and views buttons */}
        <div className="flex items-center">
          <div className="flex items-center bg-white/[0.15] px-5 py-2 rounded-full">
            <FaRegThumbsUp className="text-xl"/> <span className="ml-2">{VideoInfo?.stats?.likes} likes</span>
          </div>
          <div className="bg-white/[0.15] ml-4 px-5 py-2 rounded-full">
            {VideoInfo?.stats?.views} views
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
