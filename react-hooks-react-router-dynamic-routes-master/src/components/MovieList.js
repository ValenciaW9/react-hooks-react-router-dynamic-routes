import React from "react";
import { Link } from "react-router-dom";

function MovieList({ movies }) {
  const renderMovies = movies.map((movie) => (
    <li key={movie.id}>
      <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
    </li>
  ));

  return <ul>{renderMovies}</ul>;
}

export default MovieList;