import { useEffect, useState, useRef } from "react";
import { getMovie } from "../../api";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import css from "./movieDetails.module.css";
//import { FcImageFile } from "react-icons/fc";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const savedLocation = useRef(location.state ?? "/");
  console.log("location", location);

  const fetchMovieDetails = async (movieId) => {
    try {
      setLoading(true);
      const data = await getMovie(`/movie/${movieId}`);
      setMovieDetails(data);
      setLoading(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetchMovieDetails(movieId);
  }, [movieId]);

  if (loading) {
    return <h2 className={css.dscrMessage}>Loading...</h2>;
  }

  if (error) {
    return <h2 className={css.dscrMessage}>Failed to fetch movie details</h2>;
  }

  return (
    <div className={css.box}>
      <Link className={css.back} to={savedLocation.current}>
        <IoIosArrowBack />
        <IoIosArrowBack />
        <IoIosArrowBack />
      </Link>

      <div className={css.boxDetails}>
        {movieDetails && (
          <>
        <img
          className={css.img}
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`
              : "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg"
          }
          alt="Poster"
        />
        <h1 className={css.title}>{movieDetails && movieDetails.title}</h1>
        <p className={css.rating}>
          IMDB {movieDetails && movieDetails.popularity}
        </p>
        <h2 className={css.miniTitle}>Overview</h2>
        <p className={css.dscr}>{movieDetails && movieDetails.overview}</p>
        <div className={css.boxInformation}>
          <h2 className={css.titleInformation}>Additional information</h2>

          <div className={css.wrapLink}>
            <Link className={css.link} to="cast">
              Cast
            </Link>
            <Link className={css.link} to="reviews">
              Reviews
            </Link>
          </div>
        </div>
            <Outlet />
            </>
        )}
      </div>
    </div>
  );
};

export default MovieDetailsPage;
