import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../utils/fetchData";

const RecomendedVideo = ({ videoId }) => {
  const [video, setVideo] = useState('');

  const fetchVideo = (id) => {
    fetchData(`video/related-contents/?id=${id}`)
      .then((response) => {
        setVideo(response?.data?.contents);
        // console.log("response: ", response?.data?.contents);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(()=>{
    fetchVideo(videoId);
  },[videoId])

  if(video === '') {
    return;
  }
  return (
    <>
      {video.map((video, index) => {
        if(video.type !== 'video') return false;
        const data = video.video;
        // console.log("data: ", data);
        return (
          <Link to={`/video/id=${data.videoId}`} key={data.videoId}>
            <div
              className="flex flex-col sm:flex-row xl:grid xl:grid-cols-2 mb-4"
              key={index}
            >
              <div className="mr-2 max-w-[300px]">
                <img src={data?.thumbnails?.[1]?.url} alt="" className="rounded-xl" />
              </div>
              <div>
                <p>{data.title}</p>
                <p className="text-gray-400">{data?.author?.title}</p>
                <p className="text-gray-400">{data?.stats?.views} views.{data?.publishedTimeText}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default RecomendedVideo;
