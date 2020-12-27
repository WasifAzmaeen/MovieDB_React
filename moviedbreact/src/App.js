import React, { useState } from "react";
import Searchbar from "./components/Searchbar";
import { getMoviesbyTerm } from "./api/TMDB";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getMoviesbyTerm(searchTerm, setMovies, currentPage, setTotalPages);
  };

  const nextPage = async (page_number) => {
    setCurrentPage(page_number);
    await getMoviesbyTerm(searchTerm, setMovies, currentPage, setTotalPages);
  };

  return (
    <div>
      <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} />
      <MovieList movies={movies} />
      {totalPages > 1 ? (
        <Pagination
          nextPage={nextPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
