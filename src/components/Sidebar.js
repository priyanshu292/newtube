import React from "react";
import { GoHome } from "react-icons/go";
import { PiCirclesThreeLight } from "react-icons/pi";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from "react-redux";
import { IoIosMusicalNotes } from "react-icons/io";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { MdOutlineLocalMovies } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import { Link } from "react-router-dom";


const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-60">
      <ul className="cursor-pointer">
        <Link to={"/"}><li className="flex items-center hover:bg-gray-200 rounded-lg">
          <GoHome className="m-4" />
          <span className="pl-3">Home</span>
        </li>
        </Link>
        <li className="flex items-center hover:bg-gray-200 rounded-lg">
          <PiCirclesThreeLight className="m-4" />
          <span className="pl-3">Shorts</span>
        </li>
        <li className="flex items-center hover:bg-gray-200 rounded-lg">
          <MdOutlineSubscriptions className="m-4" />
          <span className="pl-3">Subscriptions</span>
        </li>
      </ul>

      <p className="bg-gray-200 mt-4 w-full h-[1px]"></p>

      <h1 className="font-bold pt-4 text-gray-700">Explore</h1>
      <ul className="cursor-pointer">
        <li className="flex items-center hover:bg-gray-200 rounded-lg">
          <IoIosMusicalNotes className="m-4" />
          <span>Music</span>
        </li>
        <li className="flex items-center hover:bg-gray-200 rounded-lg">
          <MdOutlineSportsBasketball className="m-4" />
          <span>Sports</span>
        </li>
        <li className="flex items-center hover:bg-gray-200 rounded-lg">
          <SiYoutubegaming className="m-4" />
          <span>Gaming</span>
        </li>
        <li className="flex items-center hover:bg-gray-200 rounded-lg">
          <MdOutlineLocalMovies className="m-4" />
          <span>Movies</span>
        </li>
        
      </ul>

      <p className="bg-gray-200 mt-4 w-full h-[1px]"></p>

      
      <ul className="mt-5 cursor-pointer">
        <li className="flex items-center hover:bg-gray-200 rounded-lg">
          <CiSettings className="m-4" />
          <span>Settings</span>
        </li>
        <li className="flex items-center hover:bg-gray-200 rounded-lg">
          <CiFlag1 className="m-4" />
          <span>Report history</span>
        </li>
        <li className="flex items-center hover:bg-gray-200 rounded-lg">
          <IoIosHelpCircleOutline className="m-4" />
          <span>Help</span>
        </li>
        <li className="flex items-center hover:bg-gray-200 rounded-lg">
          <MdOutlineFeedback className="m-4" />
          <span>Send feedback</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
