import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  const { poster_path, title } = movie;
  console.log("movie moviecard", movie);

  return (
    <div className="w-48 m-1">
      <img src={IMG_CDN_URL + poster_path} alt={title}></img>
    </div>
  );
};

export default MovieCard;
