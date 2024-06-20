import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
    console.log('movies', movies)
  return (
      <ul>
          {movies.map((movie) => (
            
              <li key={movie.id}>
                  <div>
                      <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                  </div>
                  
              </li>
         ))}
    </ul>)
}

export default MovieList