const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
};

export async function fetchTrending() {
  const res = await fetch(`${BASE_URL}/trending/movie/week`, options);
  if (!res.ok) throw new Error("Failed to fetch trending movies");
  return res.json();
}
