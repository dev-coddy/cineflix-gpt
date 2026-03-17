import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc } from "firebase/firestore";

import { updateDoc } from "firebase/firestore";

const Movie = ({ movie }) => {
  const { user } = UserAuth();

  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const [hover, setHover] = useState(false);

  const movieId = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(!saved);
      await updateDoc(movieId, {
        savedShows: arrayUnion({
          vote_average: movie.vote_average,
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
          overview: movie.overview,
        }),
      });
    } else {
      alert("Please Log in to save a movie");
    }
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`group relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer p-2 transition-transform duration-300  `}
    >
      {/* Movie Image */}
      <img
        className="rounded-lg"
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt={movie.original_title}
      />

      {/* Hover Overlay */}
      <div
        className={`w-[100%] absolute inset-0 bg-gradient-to-t from-black  text-white opacity-0 ${hover ? "opacity-100" : "opacity-0"} transition-opacity duration-300 rounded-lg p-4 flex flex-col justify-end`}
      >
        <h3 className="text-sm md:text-base font-bold mb-1 line-clamp-2 break-words">
          {movie.title}
        </h3>

        <p className="text-xs text-gray-300 mb-1">⭐ {movie.vote_average}</p>

        <p className="text-xs line-clamp-3 mb-2">{movie.overview}</p>

        <button onClick={saveShow} className="absolute top-3 right-3 text-lg">
          {like ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
        </button>
      </div>
    </div>
  );
};

export default Movie;
