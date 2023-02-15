import React from "react";
import VideoCard from "./VideoCard";
import { Link } from 'react-router-dom';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const Home = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 overflow-y-auto">
      {arr.map((video, index) => {
        return (
          <Link to="video" key={index}>
            <VideoCard />
          </Link>
        )
      })}
    </div>
  );
};

export default Home;
