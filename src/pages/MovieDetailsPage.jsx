import { useEffect, useState } from "react";
import { getMovie } from "../api";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchMovieDetails = async (id) => {
    try {
      setLoading(true);
      const data = await getMovie(`/movie/${id}`);
      setMovieDetails(data);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch movie details");
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!id) {
      return;
    }
    fetchMovieDetails(id);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w200/${movieDetails.poster_path}`} alt="vgfvfc" />
      <h1>{movieDetails.title}</h1>
      <p>IMDB {movieDetails.popularity}</p>
       <p>Overview</p>
      <p>{movieDetails.overview}</p>
      <p>Genres</p>
       
    </div>
  );
};

export default MovieDetailsPage;
