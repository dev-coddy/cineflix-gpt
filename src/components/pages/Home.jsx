import React from "react";
import { Main } from "../Main";
import Row from "../Row";
import requests from "../../Requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Row title={"Popular"} requestURL={requests.requestPopular} />
      <Row title={"Top Rated"} requestURL={requests.requestTopRated} />
      <Row title={"Upcoming"} requestURL={requests.requestUpcoming} />
      <Row title={"Horror"} requestURL={requests.requestHorror} />
    </div>
  );
};

export default Home;
