import React, { useEffect, useState } from "react";
import hamburger from "../assets/hamburger.png";
import user from "../assets/user.png";
import ytlogo from "../assets/ytlogo.png";
import ytname from "../assets/ytname.png";
import { GoSearch } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {YOUTUBE_SEARCH_API} from "../utils/constants"
import { cacheResults } from "../utils/searchSlice";

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions , setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();


  /**
   * searhCache = {
   *  "iphone" : ["iphone 11" , "iphone 14"]
   * }
   * 
   * searchQuery = iphone
   * 
   */

  useEffect(()=>{
    // make an api call after every key press
    // but if the difference between 2 api is < 200ms
    // then decline the API Call
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]); // not making an API CALL because its present in Cache already
      }else{
        getSearchSuggestions()                  // making API CALL
      }
    }, 200); //Debounce

    return ()=> {
      clearTimeout(timer);
    }

  },[searchQuery]);

  /*  DEBOUNCING
   *
   *  key - i
   *  - render the component
   *  - useEffect();
   *  - start timer => started the timer and make an api call after 200 ms
   * 
   * if before 200 ms, another key hits. key -in
   *  - destroy the previous component(call the useEffect return method)
   *  - re-render the component
   *  - useEffect(); 
   *  - start timer => make an api call after 200 ms
   * 
   */

  const getSearchSuggestions = async() => {
    console.log("API CALL -" +searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    //update Cache
    dispatch(cacheResults({
      [searchQuery] : json[1],
    }));
  }


  // =======================================================================


  const toggleSideBar = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
    <div className="grid grid-flow-col py-3 px-5 mx-2 shadow-lg fixed top-0 w-full bg-white z-10">
      <div className="flex col-span-1 items-center cursor-pointer">
        <img
          onClick={toggleSideBar}
          className="h-8"
          src={hamburger}
          alt="hamburger"w
        />
        <a href="/" className="flex col-span-1 items-center cursor-pointer">
          <img className="h-8 pr-1 mx-2" src={ytlogo} alt="ytlogo" />
          <img className="h-7" src={ytname} alt="ytname" />
        </a>
      </div>
      <div className="col-span-10 pl-48">
        <div>
        <input
          className="w-[32rem] border border-gray-400 p-2 rounded-l-full"
          placeholder="  Search"
          type="text"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          onFocus={()=>setShowSuggestions(true)}
          onBlur={()=>setShowSuggestions(false)}
        />
        <button className="border border-gray-400 px-5 py-3 rounded-r-full bg-gray-100">
          <GoSearch />
        </button>
        </div>
        {showSuggestions && (<div className="fixed bg-white py-2 px-2 w-[32rem] shadow-lg rounded-lg border border-gray-100">
          <ul>
            {suggestions.map((s) => (
              <li key={s} className="flex items-center gap-2 px-3 py-1 shadow-sm hover:bg-gray-100"><GoSearch />{s}</li>
            ))}
          </ul>
        </div>)}
      </div>
      <div className="col-span-1 cursor-pointer pt-2">
        <img className="h-8" src={user} alt="userIcon" />
      </div>
    </div>
    </>
  );
};

export default Head;
