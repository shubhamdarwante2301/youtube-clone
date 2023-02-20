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
    type: 'menu'
  },
  {
    menu: "Trending",
    icon: <FaFire />,
    type: 'menu'
  },
  {
    menu: "Music",
    icon: <FaMusic />,
    type: 'menu'
  },
  {
    menu: "Films",
    icon: <FaFilm />,
    type: 'menu'
  },
  {
    menu: "Live",
    icon: <MdLiveTv />,
    type: 'menu'
  },
  {
    menu: "Gaming",
    icon: <FaGamepad />,
    type: 'menu'
  },
  {
    menu: "News",
    icon: <FaNewspaper />,
    type: 'menu'
  },
  {
    menu: "Learning",
    icon: <FaLightbulb />,
    type: 'menu'
  },
  {
    menu: "Fashion & Beauty",
    icon: <GiDiamondRing />,
    devider: true,
    type: 'menu'
  },
  {
    menu: "Settings",
    icon: <AiOutlineSetting />,
    type: 'non-menu'
  },
  {
    menu: "Report History",
    icon: <AiOutlineFlag />,
    type: 'non-menu'
  },
  {
    menu: "Help",
    icon: <GiHelp />,
    type: 'non-menu'
  },
  {
    menu: "Send Feedback",
    icon: <MdOutlineFeedback />,
    devider: true,
    type: 'non-menu'
  },
];
