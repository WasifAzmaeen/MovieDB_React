import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Searchbar from "./components/Searchbar";
import { getMoviesbyTerm } from "./api/TMDB";
import MovieList from "./components/MovieList";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getMoviesbyTerm(searchTerm, setMovies);
  };

  return (
    <div>
      <NavBar />
      <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
