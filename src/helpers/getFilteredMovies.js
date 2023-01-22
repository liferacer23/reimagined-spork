export function getFilteredMovies(movies, filter) {
  // TODO: Implement this function. See the README for more details.

  movies = movies.filter((movie) => {
    if (movie.title.toLowerCase().includes(filter.toLowerCase())) {
      return movie;
    }
  });

  return movies;
}
