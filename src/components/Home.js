import React, {useContext} from "react";
import VideoCard from "./VideoCard";
import { Link } from 'react-router-dom';
import { Context } from "../context/contextApi";

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const Home = () => {
  const { loading, searchResults} = useContext(Context)
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 overflow-y-auto">
      {
       !loading && searchResults.map((video, index) => {
        if(video.type !== "video") return false;
        return (
            <Link to={`video/id=${video.video.videoId}`} key={index}>
              <VideoCard video={video.video}/>
            </Link>
        )
      })}
    </div>
  );
};

export default Home;
