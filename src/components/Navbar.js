import React from "react";
import { Link } from "react-router-dom";
import { FaYoutube, FaSistrix, FaBars } from "react-icons/fa";

const Navbar = ({ setToggal, toggal, menuIcon }) => {
  // console.log("menuiocn= ", menuIcon);
  return (
    <div className="flex justify-between items-center sticky top-0 left-0 bg-[#0f0f0f] mb-3 py-3">
      <div className="flex items-center">
        <FaBars
          className="block md:hidden mr-2 text-xl text-white"
          onClick={() => setToggal(!toggal)}
        />
        {/* logo */}
        <Link to="/">
          <div className="flex items-center">
            <FaYoutube className="text-red text-3xl mr-2" />
            <span className="hidden md:block text-xl text-bold">YouTube</span>
          </div>
        </Link>
      </div>
      {/* search bar */}
      <div className="flex items-center border rounded-full py-1 px-5 w-[500px]">
        <input
          type="text"
          placeholder="Search"
          className="mr-2 text-xl bg-[#0f0f0f] w-full focus:outline-none"
        />
        <FaSistrix />
      </div>
      <div className="ml-1">
        <div className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-700">
          <p>S</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
