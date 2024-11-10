import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-2 md:px-24 absolute text-white  bg-gradient-to-r from-black">
      <h1 className="text-lg md:text-3xl font-bold">{title}</h1>
      <p className="py-4 text-lg w-3/12 hidden md:block">{overview}</p>
      <div className="flex flex-row">
        <button className="bg-white text-black  p-1 md:p-4  text-lg md:text-xl rounded opacity-90 hover:opacity-60">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white  p-1 md:p-4  text-lg md:text-xl rounded ml-4 opacity-70 hover:opacity-50">
          &#9432; More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
