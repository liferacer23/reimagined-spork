import { Link } from "react-router-dom";
import { Stars } from "./Stars";

export function Movie({ movie }) {
  return (
    <div className="Movie">
      <div>
        <img src={movie.img} alt="movie" />
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
