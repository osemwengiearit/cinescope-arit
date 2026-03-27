import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import MovieDetail from "./pages/MovieDetail";
// import Watchlist from "./pages/Watchlist";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Future routes */}
        {/* <Route path="/movie/:id" element={<MovieDetail />} /> */}
        {/* <Route path="/watchlist" element={<Watchlist />} /> */}
      </Routes>
    </div>
  );
}

export default App;
