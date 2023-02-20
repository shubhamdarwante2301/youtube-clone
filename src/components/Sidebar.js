import React, {useContext} from "react";
import { CATEGORIES } from '../constants/categories';
import { Context } from "../context/contextApi";

const temp = "Home";
const Sidebar = ({ toggal }) => {
  // console.log(toggal);
  const {setSelectedCategory} = useContext(Context);
  return (
    <div className={toggal ? "md:block px-4 w-[250px] fixed top-[60px] left-0 overflow-y-auto md:static z-10 bg-[#0f0f0f] h-screen" : "hidden"}>
      {CATEGORIES.map((option, index) => {
        return (
          <React.Fragment key={index}>
            <div
              className={temp === option.menu ? "bg-white/[0.15] rounded-md" : ""}
              onClick={()=>{
                if(option.type === 'menu') {
                  console.log(option.menu)
                  setSelectedCategory(option.menu);
                }
              }}
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
