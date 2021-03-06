import axios from "axios";

const TMDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

const getMoviesbyTerm = (SearchTerm, setMovies, page_number, setTotalPages) => {
  TMDB.get("/search/movie/", {
    params: {
      api_key: "209d31e2b7002857fcc0fdeff8329ae2",
      query: SearchTerm,
      page: page_number,
    },
  }).then((response) => {
    setMovies(response.data.results);
    setTotalPages(response.data.total_pages);
  });
};

const getMovieDetails = (movieID, setCurrentMovie) => {
  TMDB.get("movie/" + movieID, {
    params: {
      api_key: "209d31e2b7002857fcc0fdeff8329ae2",
    },
  }).then((response) => {
    setCurrentMovie(response.data);
  });
};

export { getMoviesbyTerm, getMovieDetails };
