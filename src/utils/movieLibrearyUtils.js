export const orderMovies = ([...movies], order) => {
  return movies.sort((a, b) => order * (a.year - b.year));
};
