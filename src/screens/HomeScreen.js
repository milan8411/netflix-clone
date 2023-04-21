import React from "react";
import Banner from "../Banner";
import "./HomeScreen.css";
import Nav from "../Nav";
import requests from "../Requests";
import Row from "../Row";
function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />

      <Row title="Treding Now" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movie" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movie" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movie" fetchUrl={requests.fetchTopRated} />
    </div>
  );
}

export default HomeScreen;
