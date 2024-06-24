import { useEffect, useState } from "react";
import { getMovie } from "../../api";
import { useParams } from "react-router-dom";
import css from "./movieCast.module.css"
import { FaPerson } from "react-icons/fa6";
import { PiMaskSadLight } from "react-icons/pi";


const MovieCast = () => {
  const { movieId } = useParams();
  const [movieActors, setMovieActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovieActors = async (movieId) => {
    try {
      setLoading(true);
        const data = await getMovie(`/movie/${movieId}/credits`, { page: 1, limit: 10 });
          const truncatedActors = data.cast.slice(0, 10);
      setMovieActors(truncatedActors);
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
    fetchMovieActors(movieId);
  }, [movieId]);

  if (loading) {
    return <h2 className={css.dscrMessage}>Loading...</h2>
  }

  if (error) {
    return <h2 className={css.dscrMessage}>Failed to fetch movie details</h2>
  }




  return (
    <div className={css.box}>
      
      {(movieActors.length > 0) ? (<ul className={css.list}>
        {movieActors.map((actor) => (
          <li key={actor.cast_id} className={css.item}>
            {actor.profile_path ? (
              <img className={css.img}
                src={`https://image.tmdb.org/t/p/w92/${actor.profile_path}`}
                alt={actor.name}
              />
            ) : (
              <p className={css.icon}><FaPerson className={css.icon} /></p>
            )}
            <div className={css.textWrapper}>
                <p className={css.text} >{actor.name}</p>
            <p className={css.text}><span className={css.textAccent}>Character:</span><br /> {actor.character}</p> 
          </div>
          </li>
        ))}
      </ul>) : (
        <div className={css.boxMessage}>
              <p className={css.message} > Not found cast!</p>
    <p className={css.iconMessage}><PiMaskSadLight  className={css.iconMessage} /></p>
        </div>)}
    </div>
  );
};

export default MovieCast;
