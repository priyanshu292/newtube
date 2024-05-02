import React from "react";
import hamburger from "../assets/hamburger.png";
import user from "../assets/user.png";
import ytlogo from "../assets/ytlogo.png";
import ytname from "../assets/ytname.png";
import { GoSearch } from "react-icons/go";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleSideBar = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col py-3 px-5 mx-2 items-center shadow-lg">
      <div className="flex col-span-1 items-center cursor-pointer">
        <img
          onClick={toggleSideBar}
          className="h-8"
          src={hamburger}
          alt="hamburger"
        />
        <a href="/" className="flex col-span-1 items-center cursor-pointer">
          <img className="h-8 pr-1 mx-2" src={ytlogo} alt="ytlogo" />
          <img className="h-7" src={ytname} alt="ytname" />
        </a>
      </div>
      <div className="flex items-center col-span-10 pl-48">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          placeholder="  Search"
          type="text"
        />
        <button className="border border-gray-400 px-5 py-3 rounded-r-full bg-gray-100">
          <GoSearch />
        </button>
      </div>
      <div className="col-span-1">
        <img className="h-8" src={user} alt="userIcon" />
      </div>
    </div>
  );
};

export default Head;
