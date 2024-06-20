import { useEffect, useState } from "react";
import { getMovie } from "../api";
import { useParams, Link,Outlet } from "react-router-dom";


const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchMovieDetails = async (movieId) => {
    try {
      setLoading(true);
      const data = await getMovie(`/movie/${movieId}`);
      setMovieDetails(data);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch movie details");
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
console.log('movieDetails', movieDetails)
  return (
    <>
    <button>Go Back</button>
    <div>
      
      <img
        src={
          movieDetails &&
          `https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`
        }
        alt="poster"
      />
      <h1>{movieDetails && movieDetails.title}</h1>
      <p>IMDB {movieDetails && movieDetails.popularity}</p>
      <h2>Overview</h2>
      <p>{movieDetails && movieDetails.overview}</p>
      <div>
        <h2>Additional information</h2>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        
      </div>
      <Outlet />
      </div>
      </>
  );
};

export default MovieDetailsPage;
