import React from "react";


function MovieShow({ movies, match }) {
  // Call useParams to access the `params` from the URL
  const params = match.params;
  const movie = movies.find((movie) => movie.id === parseInt(params.movieId));

  return (
    <div>
      {/* And here we access the `movieid` stored in `params` to render information about the selected movie */}
      <h3>{movie.title}</h3>
    </div>
  );
}

export default MovieShow;