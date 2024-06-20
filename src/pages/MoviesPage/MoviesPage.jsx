import { useEffect, useState } from "react";
import { getMovies } from "../../api";
import { useParams } from "react-router-dom";
import { Field, Formik } from "formik";
import css from "./moviesPage.module.css";
const MoviesPage = () => {
  const { movieId } = useParams();
  const [movieSearch, setMovieSearch] = useState([]);
  const [query, setQuery] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);



  useEffect(() => {
    const fetchData = async () => {
      if (query === "") return;
      try {
        setError(false);
        setLoading(true);
        
          const dataElements = await getMovies("/search/movie?", {
            query: { query },
          });
          setMovieSearch((prev) => [...prev, ...dataElements]);
        
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    query && fetchData();
  }, [query]);

   const handleSubmit = async (searchQuery) => {
    setQuery(searchQuery)
    setMovieSearch([])

    
  };
    
    const handleSubmit = async ({values, actions}) => {
      if (values.query.trim() === "") {
        setError("Failed to fetch movie details");
      } else {
        submit(values.query);
      }
      actions.resetForm();
    };
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <div className={css.inputContainer}>
          <Field
            type="text"
            className={css.input}
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit">
            sea
          </button>
        </div>
      </Formik>
    </div>
  );
};

export default MoviesPage;
