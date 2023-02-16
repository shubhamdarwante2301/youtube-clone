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

export const CATEGORIES = [
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
    devider: true,
  },
  {
    menu: "Settings",
    icon: <AiOutlineSetting />,
  },
  {
    menu: "Report History",
    icon: <AiOutlineFlag />,
  },
  {
    menu: "Help",
    icon: <GiHelp />,
  },
  {
    menu: "Send Feedback",
    icon: <MdOutlineFeedback />,
    devider: true,
  },
];
