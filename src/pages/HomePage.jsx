import { useEffect, useState } from "react"
import { getMovies } from "../api"
import MovieList from "../components/MovieList/MovieList"



const HomePage = () => {
  const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const dataElements = await getMovies('/trending/movie/day', { language: 'en-US', page: 1 });
       console.log('Fetched data:', dataElements); 
        setItems(dataElements);
      } catch (error) {
        setError(true);
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading movie details.</div>;
  }



  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={items}/>
    </div>
  )
}

export default HomePage