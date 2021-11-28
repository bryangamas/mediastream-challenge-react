import React from "react";

const Search = ({ genres, onChangeGenre, order, onChangeOrder }) => {
  return (
    <div className="movie-library__actions">
      <select
        name="genre"
        placeholder="Search by genre..."
        onChange={(e) => onChangeGenre(e.target.value)}
      >
        <option value="">All</option>
        {genres.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <button onClick={onChangeOrder}>
        Year {order > 0 ? "Descending" : "Ascending"}
      </button>
    </div>
  );
};

export default Search;
