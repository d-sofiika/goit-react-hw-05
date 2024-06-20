
import { useEffect, useState } from "react";
import { getMovies} from "../../api";
import { useParams } from "react-router-dom";



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
      setError("Failed to fetch movie details");
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      
      <ul>
        {movieReviews.map((item) => (
          <li key={item.id}>
            <h3>Author: {item.author}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );




  

}

export default MovieReviews