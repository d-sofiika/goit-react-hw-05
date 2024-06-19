
import { Routes, Route } from "react-router-dom";
//import css from "./App.module.css"
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MoviesPage from "./pages/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navigation from "./components/Navigation/Navigation";


function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/moviespage" element={<MoviesPage />} />
        <Route path="/moviedetailspage/:id" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
