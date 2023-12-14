import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import MoviesPage from "./MoviesPage";

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "A River Runs Through It" },
    { id: 2, title: "Se7en" },
    { id: 3, title: "Inception" }
  ]);

  const addMovie = () => {
    // Example usage of setMovies to add a new movie
    const newMovie = { id: 4, title: "The Shawshank Redemption" };
    setMovies([...movies, newMovie]);
  };

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/movies">
          <MoviesPage movies={movies} />
        </Route>
        <Route exact path="/">
          <div>Home</div>
        </Route>
      </Switch>
      <button onClick={addMovie}>Add Movie</button>
    </div>
  );
}

export default App;