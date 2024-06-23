import { useEffect, useState } from "react";
import { getMovies } from "../../api";
import { useSearchParams } from "react-router-dom";

import css from "./moviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [params, setParams] = useSearchParams();
  const [movieSearch, setMovieSearch] = useState([]);
  const [query, setQuery] = useState(params.get("query") ?? "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (query) {
      getData(query);
    
    }
  }, [query]);

  const getData = async (query) => {
    try {
      setLoading(true);
      const dataElements = await getMovies("/search/movie", { query });
      console.log('dataElements', dataElements)
      if (dataElements) {
        setMovieSearch(dataElements);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const form = e.target;
    console.log('form', e.target)
    const newQuery = form.elements.query.value.trim();
    if (newQuery !== query) {
      setParams({ query: newQuery });
      setQuery(newQuery);
    }
  };
  return (
    <div className={css.fullWrapper}>
      <form className={css.form} onSubmit={handleSearch}>
        <div className={css.inputContainer}>
          <input
            defaultValue={query}
            type="text"
            className={css.input}
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <button className={css.btn} type="submit">
            Search
          </button>
        </div>
      </form>
      {loading && <h2 className={css.dscr}>Loading...</h2>}
      {error && <h2 className={css.dscr}>Failed to fetch movie details</h2>}
      {!loading && !error && movieSearch.length === 0 && (
        <h2 className={css.dscr}>No results found</h2>
      )}
      {!loading && !error && movieSearch.length > 0 && (
        <MovieList movies={movieSearch} />
      )}
    </div>
  );
};

export default MoviesPage;
