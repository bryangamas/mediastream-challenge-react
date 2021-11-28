import { useState, useEffect } from "react";
import { API_BASE } from "../constants";

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [fetchCount, setFetchCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [order, setOrder] = useState(1);

  const toggleOrder = () => {
    setOrder(order * -1);
  };

  useEffect(() => {
    const handleGenreFetch = () => {
      setLoading(true);
      console.log("Getting genres");
      fetch(`${API_BASE}/genres`)
        .then((res) => res.json())
        .then((json) => {
          setGenres(json);
          setLoading(false);
        })
        .catch(() => {
          console.log("Run yarn movie-api for fake api");
        });
    };
    handleGenreFetch();
  }, []);

  useEffect(() => {
    const handleMovieFetch = () => {
      setLoading(true);
      setFetchCount((prevCount) => prevCount + 1);
      fetch(
        `${API_BASE}/movies?_limit=50&genres_like=${selectedGenre}&_sort=year&_order=${
          order > 0 ? "asc" : "desc"
        }`
      )
        .then((res) => res.json())
        .then((json) => {
          setMovies(json);
          setLoading(false);
        })
        .catch(() => {
          console.log("Run yarn movie-api for fake api");
        });
    };
    handleMovieFetch();
  }, [selectedGenre, order]);

  return {
    genres,
    movies,
    fetchCount,
    order,
    setSelectedGenre,
    toggleOrder,
    loading,
  };
};
