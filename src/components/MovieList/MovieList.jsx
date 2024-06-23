import { Link, useLocation } from "react-router-dom";
import css from "./movieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.item}>
          <div className={css.wrapper}>
            <Link
              to={`/movies/${movie.id}`}
              className={css.link}
              state={location}
                  >
                      <img className={css.img} src={movies &&
                          `https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="Banner" />
              <p className={css.title}>{movie.title}</p>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
