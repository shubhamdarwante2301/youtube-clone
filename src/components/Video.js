import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/fetchData";
import RecomendedVideo from "./RecomendedVideo";
import VideoDetails from "./VideoDetails";

const Video = () => {
  const[VideoInfo, setVideoInfo] = useState('');
  const id = useParams();
  // console.log("id: ",id.id);

  const fetchVideo = (id) => {
    fetchData(`video/details/?${id}`)
    .then((response) => {
      setVideoInfo(response.data);
      // console.log("response: ",response.data);
    })
    .catch((error) => {
      console.error(error);
    })
  }

  useEffect(()=>{
    fetchVideo(id.id);
  },[id.id])

  if(VideoInfo === '') {
    return;
  }

  return (
    <div className="grid grid-cols-3 gap-4 xl:p-10">
      <div className="col-span-3 xl:col-span-2">
        <iframe
          src={`https://www.youtube.com/embed/${VideoInfo?.videoId}`}
          frameBorder="0"
          allowFullScreen
          title="video"
          width="100%"
          className="h-[300px] md:h-[400px] xl:h-1/4"
        />
        <div>
            <VideoDetails VideoInfo={VideoInfo}/>
        </div>
      </div>
      <div className="col-span-3 xl:col-span-1">
        {/* {arr.map((data) => {
          return <RecomendedVideo key={data} videoId={VideoInfo?.videoId}/>;
        })} */}
        <RecomendedVideo videoId={VideoInfo?.videoId} />
      </div>
    </div>
  );
};

export default Video;
