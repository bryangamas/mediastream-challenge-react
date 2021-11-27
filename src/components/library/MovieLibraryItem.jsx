import React from "react";

const MovieLibraryItem = ({ movie }) => {
  return (
    <li className="movie-library__card">
      <img
        src={movie.posterUrl}
        alt={movie.title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/images/default-movie-image.png";
        }}
      />
      <ul>
        <li className="movie-library__card-title">{movie.title}</li>
        <li>{movie.genres.join(", ")}</li>
        <li>{movie.year}</li>
      </ul>
    </li>
  );
};

export default MovieLibraryItem;
