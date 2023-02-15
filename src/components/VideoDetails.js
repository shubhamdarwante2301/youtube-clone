import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";

const VideoDetails = () => {
  return (
    <div className="mt-4">
        {/* video title */}
      <h1 className="md:text-2xl font-semibold">
        FLYING OVER NEW ZEALAND (4K Video UHD) - Calming Music With Beautiful
        Nature Video For Relaxation
      </h1>

      <div className="flex justify-between flex-col sm:flex-row mt-4">
          {/* channel name and subscriber count */}
        <div className="flex items-center mb-4">
          <div>
            <div className="p-5 rounded-full bg-red"></div>
          </div>
          <div className="ml-4">
            <p>Marcus House</p>
            <p className="text-gray-400">454K subscribers</p>
          </div>
          <div className="bg-red ml-4 px-5 py-2 rounded-full text-md">
              Subscribe
          </div>
        </div>

        {/* like and views buttons */}
        <div className="flex items-center">
          <div className="flex items-center bg-white/[0.15] px-5 py-2 rounded-full">
            <FaRegThumbsUp className="text-xl"/> <span className="ml-2">20.45k likes</span>
          </div>
          <div className="bg-white/[0.15] ml-4 px-5 py-2 rounded-full">
            339.6k views
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
