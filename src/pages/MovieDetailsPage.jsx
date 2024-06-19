import { useEffect, useState } from "react";
import { getMovies } from "../api";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log("item", item);

  useEffect(() => {
    if (!id) {
      return;
    }
    const getData = async () => {
      try {
        setLoading(true);
        const dataElements = await getMovies (`/movie/${id}`);
        setItem(dataElements);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [id]);

  return <div>Detail</div>;
};

export default MovieDetailsPage;
