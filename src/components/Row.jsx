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

  console.log(movies);

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          size={35}
          className="bg-white rounded-full opacity-50 absolute z-10 hidden group-hover:block"
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
          size={35}
          className="bg-white rounded-full opacity-50 absolute end-0 hidden group-hover:block"
        />
      </div>
    </>
  );
};

export default Row;
