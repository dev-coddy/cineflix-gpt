import React, { useState, useEffect, useRef } from "react";
import { UserAuth } from "../context/AuthContext";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { db } from "../firebase";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";

const SavedShows = () => {
  const sliderRef = useRef(null);
  const [movies, setMovies] = useState([]);
  const [hover, setHover] = useState(false);
  const { user } = UserAuth();

  useEffect(() => {
    if (!user?.email) return;

    const docRef = doc(db, "users", user.email);

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      setMovies(docSnap.data()?.savedShows || []);
    });

    return () => unsubscribe();
  }, [user?.email]);

  const slideLeft = () => {
    sliderRef.current.scrollLeft -= 500;
  };

  const slideRight = () => {
    sliderRef.current.scrollLeft += 500;
  };
  return (
    <>
      <h2 className="text-white font-bold md:text-lg p-4 font-['Press_Start_2P']">
        My List
      </h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={35}
          className="bg-white rounded-full opacity-50 absolute z-20 hidden group-hover:block cursor-pointer"
        />
        <div
          ref={sliderRef}
          className=" w-full h-full overflow-x-scroll overflow-y-visible whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((movie, id) => {
            return (
              <div
                key={id}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className={`group relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer p-2 transition-transform duration-300  `}
              >
                {/* Movie Image */}
                <img
                  className="rounded-lg"
                  src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
                  alt={movie?.original_title}
                />

                {/* Hover Overlay */}
                <div
                  className={`w-[100%] absolute inset-0 bg-gradient-to-t from-black  text-white opacity-0 ${hover ? "opacity-100" : "opacity-0"} transition-opacity duration-300 rounded-lg p-4 flex flex-col justify-end`}
                >
                  <h3 className="text-sm md:text-base font-bold mb-1 line-clamp-2 break-words">
                    {movie.title}
                  </h3>

                  <p className="text-xs text-gray-300 mb-1">
                    ⭐ {movie?.vote_average}
                  </p>

                  <p className="text-xs line-clamp-3 mb-2">{movie?.overview}</p>
                </div>
              </div>
            );
          })}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={35}
          className="bg-white rounded-full opacity-50 absolute z-20 end-0 hidden group-hover:block cursor-pointer"
        />
      </div>
    </>
  );
};

export default SavedShows;
