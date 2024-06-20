import { useEffect, useState } from "react";
import { getMovie } from "../../api";
import { useParams } from "react-router-dom";

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
      setError("Failed to fetch movie details");
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }




  return (
    <div>
      
      <ul>
        {movieActors.map((actor) => (
          <li key={actor.cast_id}>
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w92/${actor.profile_path}`}
                alt={actor.name}
              />
            ) : (
              <p>No Image Available</p>
                )}
                <p>{actor.name}</p>
            <p>Character: {actor.character}</p> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
