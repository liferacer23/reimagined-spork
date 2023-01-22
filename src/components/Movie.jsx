import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Stars } from "./Stars";
import "../styles/Movie.css";
export function Movie({ movie }) {
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
    <div className="Movie">
      <div>
        {loading ? (
          <div>Loading ...</div>
        ) : (
          <img src={movieImage.img} alt="movie" className="Movie-image" />
        )}
        <Link to="/" className="Movie-back" />
      </div>
      <div className="Movie-name">{movie.title}</div>
      <div className="Movie-year">{movie.year}</div>
      <div className="Movie-stars">
        <Stars numStars={movie.rating} />
        &nbsp;({movie.reviews})
      </div>
      <div className="Movie-description">{movie.description}</div>
    </div>
  );
}
