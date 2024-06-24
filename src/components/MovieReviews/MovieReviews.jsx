
import { useEffect, useState } from "react";
import { getMovies} from "../../api";
import { useParams } from "react-router-dom";
import css from  "./movieReviews.module.css"
import { PiMaskSadLight } from "react-icons/pi";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovieReviews = async (movieId) => {
    try {
      setLoading(true);
        const data = await getMovies(`/movie/${movieId}/reviews`);
      setMovieReviews(data);
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
    fetchMovieReviews(movieId);
  }, [movieId]);

  if (loading) {
    return <h2 className={css.dscrMessage}>Loading...</h2>
  }

  if (error) {
      return <h2 className={css.dscrMessage}>Failed to fetch movie details</h2>
  }
 console.log(movieReviews);
  return (<div className={css.box}>
    {(!movieReviews.length === 0) ? 
       
     ( 
      <ul className={css.list}>
        {movieReviews.map((item) => (
          <li key={item.id}className={css.item}>
            <h3  className={css.title}><span className={css.titleAccent}>Author:</span> {item.author}</h3>
            <p className={css.text}>{item.content}</p>
          </li>
        ))}
      </ul>
    )
      : (
        <div>
              <p className={css.message} > Not found reviews!</p>
    <p className={css.icon}><PiMaskSadLight  className={css.icon} /></p>
        </div>)
    }
    </div>
   
    
  );




  

}

export default MovieReviews