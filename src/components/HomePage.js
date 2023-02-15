import React from "react";
import { Sidebar, Home } from './index';

const HomePage = ({toggal}) => {
  
  return (
    <div className="flex">
      <div>
        <Sidebar toggal={toggal}/>
      </div>
      <div className="grow">
        <Home />
      </div>
    </div>
  );
};

export default HomePage;
