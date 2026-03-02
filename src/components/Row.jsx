import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Movie from "../components/Movie";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, requestURL }) => {
  const [movies, setMovies] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    axios.get(requestURL).then((response) => {
      setMovies(response?.data?.results);
    });
  }, [requestURL]);

  console.log(movies);

  const slideLeft = () => {
    sliderRef.current.scrollLeft -= 500;
  };

  const slideRight = () => {
    sliderRef.current.scrollLeft += 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
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
          {movies.map((movie) => {
            return <Movie movie={movie} key={movie.id} />;
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

export default Row;
