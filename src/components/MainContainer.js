import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return null;
  const mainMovie = movies[0];

  const { original_title: title, overview } = mainMovie;
  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieid={mainMovie.id} />
    </div>
  );
};

export default MainContainer;
