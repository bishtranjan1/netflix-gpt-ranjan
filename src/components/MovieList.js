import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("movies", movies);
  return (
    <div className="pl-2 md:pl-24">
      <div>
        <h1 className="text-2xl font-bold py-2 md:py-4">{title}</h1>
      </div>
      <div className="flex overflow-x-scroll ">
        <div className="flex flex-row ">
          {movies?.map((movie) => {
            console.log("movie", movie);
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
