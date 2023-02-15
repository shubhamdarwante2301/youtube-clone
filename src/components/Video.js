import React from "react";
import RecomendedVideo from "./RecomendedVideo";
import VideoDetails from "./VideoDetails";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15];

const Video = () => {
  return (
    <div className="grid grid-cols-3 gap-4 xl:p-10">
      <div className="col-span-3 xl:col-span-2">
        <iframe
          src="https://www.youtube.com/embed/E7wJTI-1dvQ"
          frameBorder="0"
          // allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
          width="100%"
          className="h-[300px] md:h-[400px] xl:h-1/4"
        />
        <div>
            <VideoDetails />
        </div>
      </div>
      <div className="col-span-3 xl:col-span-1">
        {arr.map((data) => {
          return <RecomendedVideo key={data}/>;
        })}
      </div>
    </div>
  );
};

export default Video;
