import React from "react";
import {
  FaFire,
  FaMusic,
  FaFilm,
  FaGamepad,
  FaNewspaper,
  FaLightbulb,
} from "react-icons/fa";
import { AiFillHome, AiOutlineSetting, AiOutlineFlag } from "react-icons/ai";
import { MdLiveTv, MdOutlineFeedback } from "react-icons/md";
import { GiDiamondRing, GiHelp } from "react-icons/gi";

const CATEGORIES = [
  {
    menu: "Home",
    icon: <AiFillHome />,
  },
  {
    menu: "Trending",
    icon: <FaFire />,
  },
  {
    menu: "Music",
    icon: <FaMusic />,
  },
  {
    menu: "Films",
    icon: <FaFilm />,
  },
  {
    menu: "Live",
    icon: <MdLiveTv />,
  },
  {
    menu: "Gaming",
    icon: <FaGamepad />,
  },
  {
    menu: "News",
    icon: <FaNewspaper />,
  },
  {
    menu: "Learning",
    icon: <FaLightbulb />,
  },
  {
    menu: "Fashion & Beauty",
    icon: <GiDiamondRing />,
    devider: true
  },
  {
    menu: "Settings",
    icon: <AiOutlineSetting />
  },
  {
    menu: "Report History",
    icon: <AiOutlineFlag />
  },
  {
    menu: "Help",
    icon: <GiHelp />
  },
  {
    menu: "Send Feedback",
    icon: <MdOutlineFeedback />,
    devider: true
  },
];
const temp = "Home";
const Sidebar = ({ toggal }) => {
  // console.log(toggal);
  return (
    <div className={toggal ? "md:block px-4 w-[250px] fixed top-[60px] left-0 overflow-y-auto md:static z-10 bg-[#0f0f0f] h-screen" : "hidden"}>
      {CATEGORIES.map((option, index) => {
        return (
          <React.Fragment key={index}>
            <div
              className={temp === option.menu ? "bg-white/[0.15] rounded-md" : ""}
            >
              <div
                key={option}
                className="p-3 flex items-center cursor-pointer rounded-md hover:bg-white/[0.15]"
              >
                <span className="mr-3">{option.icon}</span>
                <span>{option.menu}</span>
              </div>
            </div>
            {option.devider && <hr className="border-white/[0.15]"/>}
          </React.Fragment>
        );
      })}
      
      <div className="mt-3 ml-4">
        <p className="text-gray-500">Clone by: shubham</p>
      </div>
    </div>
  );
};

export default Sidebar;
