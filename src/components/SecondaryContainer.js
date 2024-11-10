import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  const { nowPlayingMovies, popularMovies, topRatedMovies, upcommingMovies } =
    movies;
  if (!nowPlayingMovies) {
    return null;
  }
  console.log(" movies Store", movies);
  return (
    <div className="bg-black text-white">
      <div className="relative -top-40">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Top Rated"} movies={topRatedMovies} />
        <MovieList title={"UpComing"} movies={upcommingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
