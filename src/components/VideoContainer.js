import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <>
    {isMenuOpen && <div className="flex flex-wrap justify-center mt-20 ml-52">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}><VideoCard info={video} /></Link>
      ))}
    </div>}
    {!isMenuOpen && <div className="flex flex-wrap justify-center mt-20">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}><VideoCard info={video} /></Link>
      ))}
    </div>}
    </>
  );
};

export default VideoContainer;
