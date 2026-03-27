import useTrending from "../hooks/useTrending";

function Home() {
  const { movies, loading, error } = useTrending();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Trending Movies</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.id}>
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
