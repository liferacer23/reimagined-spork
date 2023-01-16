import { useState } from "react";
import { MovieList } from "../components/MovieList";
import { SearchBar } from "../components/SearchBar";
import { getFilteredMovies } from "../helpers/getFilteredMovies";

export function Home({ movies }) {
  const [query, setQuery] = useState("");
  const filteredMovies = getFilteredMovies(movies, query);

  return (
    <div>
      <div className="Header">FMDB</div>
      <SearchBar query={query} setQuery={setQuery} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}
