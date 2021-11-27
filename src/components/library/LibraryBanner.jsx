import React from "react";
import banner from "../pages/Exercise02/assets/mountains.jpeg";

const LibraryBanner = () => {
  return (
    <div className="movie-library__banner">
      <img className="movie-library__banner" src={banner} alt="banner" />
    </div>
  );
};

export default LibraryBanner;
