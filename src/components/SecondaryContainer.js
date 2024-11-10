import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const { nowPlayingMovies } = movies;
  if (!nowPlayingMovies) {
    return null;
  }
  console.log(" movies Store", movies);
  return (
    <div className="bg-black text-white">
      <div className="relative -top-52">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Trending"} movies={nowPlayingMovies} />
        <MovieList title={"Ppopular"} movies={nowPlayingMovies} />
        <MovieList title={"Horror"} movies={nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
