import { useParams } from "react-router-dom";
import { Movie } from "../components/Movie";

export function MovieDetails({ movies }) {
  // Gets the movie id from the parsed url
  const { movieId } = useParams();
  // Find movie from pre-loaded data
  const movie = movies?.find((p) => p.id === movieId);
  return <Movie movie={movie} />;
}
