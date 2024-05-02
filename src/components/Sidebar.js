import React from "react";
import { GoHome } from "react-icons/go";
import { PiCirclesThreeLight } from "react-icons/pi";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from "react-redux";

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-60">
      <ul>
        <li className="flex items-center hover:bg-gray-200 rounded-lg">
          <GoHome className="m-4" />
          <span className="pl-3">Home</span>
        </li>
        <li className="flex items-center hover:bg-gray-200 rounded-lg">
          <PiCirclesThreeLight className="m-4" />
          <span className="pl-3">Shorts</span>
        </li>
        <li className="flex items-center hover:bg-gray-200 rounded-lg">
          <MdOutlineSubscriptions className="m-4" />
          <span className="pl-3">Subscriptions</span>
        </li>
      </ul>

      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
