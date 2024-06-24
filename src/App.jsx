
import { Routes, Route,  } from "react-router-dom";
import css from "./App.module.css"
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Navigation from "./components/Navigation/Navigation";
import { Suspense, lazy } from "react";


const MovieDetailsPage = lazy(() => import("./pages/MovieDetails/MovieDetailsPage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieReviews = lazy(()=>  import("./components/MovieReviews/MovieReviews"))
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"))


function App() {
  return (
    <div>
    
      <Navigation />
      <Suspense fallback={null}>
      <Routes className={css.wrapper}>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast/>} />
          <Route path="reviews" element={<MovieReviews/>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
       </Suspense>
    </div>
  );
}

export default App;








