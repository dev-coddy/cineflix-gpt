import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

const Movie = ({ movie }) => {
  const [like, setLike] = useState(false);
  return (
    <div
      className="w-[160px] sm:w-[200px] md:[240px] lg:[280px] inline-block cursor-pointer p-2 relative"
      key={movie.id}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt={movie.original_title}
      />
      <div className="absolute top-0 left-0 w-full h-full  hover:bg-black/60 opacity-0 hover:opacity-100 text-white p-2">
        <p className=" text-xs md:text-sm font-bold flex justify-center h-full items-center">
          {movie.title}
        </p>
        <p className="absolute top-4 left-4">
          {like ? <FaHeart /> : <FaRegHeart />}
        </p>
      </div>
    </div>
  );
};

export default Movie;
