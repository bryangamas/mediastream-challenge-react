import React from "react";

const MoviesList = ({ movies, onAddToCart }) => {
  console.log("A ver");
  return (
    <div className="movies__list">
      <ul>
        {movies.map((o) => (
          <li key={o.id} className="movies__list-card">
            <ul>
              <li>ID: {o.id}</li>
              <li>Name: {o.name}</li>
              <li>Price: ${o.price}</li>
            </ul>
            <button onClick={() => onAddToCart(o)}>Add to cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
