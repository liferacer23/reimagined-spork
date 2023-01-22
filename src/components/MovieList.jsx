import { Stars } from "./Stars";
import { Link } from "react-router-dom";
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
  console.log(movie);
  // TODO: Implement the navigation to the movie details page. See the README for more details.
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
      <img className="MovieRow-img" src={movie.img} alt={movie.name} />
    </div>
  );
}
