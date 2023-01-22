import React, { useState, useEffect } from "react";
import { Stars } from "./Stars";
import { Link } from "react-router-dom";
import "../styles/MovieList.css";
export function MovieList({ movies }) {
  if (!movies.length) {
    return <p className="NotFound">No results found</p>;
  }
  return (
    <div className="MovieList">
      {movies.map((movie) => (
        <Link to={`/${movie.id}`}>
          <MovieRow key={movie.id} movie={movie} />
        </Link>
      ))}
    </div>
  );
}

function MovieRow({ movie }) {
  // TODO: Implement the navigation to the movie details page. See the README for more details.

  const [movieImage, setMovieImage] = useState({
    img: "",
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getMovieImage(movie);
  }, [movie]);

  const getMovieImage = async () => {
    setLoading(true);
    const res = await fetch(`https://lamarr.tech/api/data/img/${movie.id}`);
    const data = await res.json();
    setMovieImage(data);
    setLoading(false);
  };
  return (
    <div className="MovieRow">
      <div className="MovieRow-details">
        <div className="MovieRow-name">{movie.title}</div>
        <div className="MovieRow-description">{movie.description}</div>
        <div className="MovieRow-stars">
          <Stars numStars={movie.rating} />
          &nbsp;{movie.reviews}
        </div>
      </div>
      {loading ? (
        <div>Loading ...</div>
      ) : (
        <img className="MovieRow-img" src={movieImage.img} alt={movie.name} />
      )}
    </div>
  );
}
