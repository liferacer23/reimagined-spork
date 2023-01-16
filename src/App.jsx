import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { loadMoviesWithImages } from "./helpers/loadMoviesWithImages";
import { Home } from "./pages/Home";
import { MovieDetails } from "./pages/MovieDetails";

/**
 * Renders the entire app.
 * @return {!React.ReactElement}
 */
function App() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function loadData() {
      setMovies(await loadMoviesWithImages());
    }
    loadData();
  }, []);

  if (!movies) {
    return <div className="Loading">Loading</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/:movieId" element={<MovieDetails movies={movies} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
