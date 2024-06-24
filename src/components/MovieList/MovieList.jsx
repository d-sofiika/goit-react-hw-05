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
                      <img className={css.img} src={
             movie.poster_path ?
            `https://image.tmdb.org/t/p/w200${movie.poster_path}`
           : 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg'

          }
           alt="Banner" />
              <p className={css.title}>{movie.title}</p>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
