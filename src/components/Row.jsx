import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";

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
      <div className="relative flex items-center">
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((movie) => {
            return <Movie movie={movie} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Row;
