import { useEffect, useState } from "react"
import { getMovies } from "../../api"
import MovieList from "../../components/MovieList/MovieList"
import css from "./homePage.module.css"


const HomePage = () => {
  const [item, setItem] = useState([])

  useEffect(() => {
    const getData = async () => {
      const dataElements = await getMovies('/trending/movie/day', { language: 'en-US', page: 1 })
      setItem(dataElements)
      
    }
    getData()
  }, [])

  return (
    <div>
      <h1 className={css.title}>Trending today</h1>
      <MovieList movies={item}/>
    </div>
  )
}

export default HomePage