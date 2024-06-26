import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  //console.log(searchParams.get("v"));   because it is not "/" so we cannot use useparams(). instead we have to use useSearchParams().

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <>
    {!isMenuOpen && <div className="flex flex-col mt-14 w-full">
      <div className="px-5 py-5 flex w-full">
        <div>
          <iframe
            width="950"
            height="550"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>}
    {isMenuOpen && <div className="flex flex-col mt-14 w-full ml-56">
      <div className="px-5 py-5 flex w-full">
        <div>
          <iframe
            width="950"
            height="550"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>}
    </>
  );
};

export default WatchPage;
