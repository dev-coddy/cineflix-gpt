import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, requestURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requestURL).then((response) => {
      setMovies(response?.data?.results);
    });
  }, [requestURL]);

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={35}
          className="bg-white rounded-full opacity-50 absolute z-10 hidden group-hover:block cursor-pointer"
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((movie) => {
            return <Movie movie={movie} />;
          })}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={35}
          className="bg-white rounded-full opacity-50 absolute z-10 end-0 hidden group-hover:block cursor-pointer"
        />
      </div>
    </>
  );
};

export default Row;
