import { useState, useEffect } from "react";
import { fetchTrending } from "../services/tmdb";

export default function useTrending() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadMovies() {
      try {
        const data = await fetchTrending();
        setMovies(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, []);

  return { movies, loading, error };
}
