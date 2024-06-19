import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
    
  return (
      <ul>
          {movies.map((movie) => (
            
              <li key={movie.id}>
                  <div>
                      <Link to={`/moviedetailspage/${movie.id}`}>{movie.title}</Link>
                  </div>
                  
              </li>
         ))}
    </ul>)
}

export default MovieList