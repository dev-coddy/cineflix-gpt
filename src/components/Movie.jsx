import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ movie }) => {
  const [like, setLike] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`group relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer p-2 transition-transform duration-300 ${hover ? "scale-125 z-50" : "scale-100"} `}
    >
      {/* Movie Image */}
      <img
        className="rounded-lg"
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt={movie.original_title}
      />

      {/* Hover Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black  text-white opacity-0 ${hover ? "opacity-100" : "opacity-0"} transition-opacity duration-300 rounded-lg p-4 flex flex-col justify-end`}
      >
        <h3 className="text-sm md:text-base font-bold mb-1">{movie.title}</h3>

        <p className="text-xs text-gray-300 mb-1">⭐ {movie.vote_average}</p>

        <p className="text-xs line-clamp-3 mb-2">{movie.overview}</p>

        <button
          onClick={() => setLike(!like)}
          className="absolute top-3 right-3 text-lg"
        >
          {like ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
        </button>
      </div>
    </div>
  );
};

export default Movie;
