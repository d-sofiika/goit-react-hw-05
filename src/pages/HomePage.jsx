import { useEffect, useState } from "react"
import { getMovies } from "../api"
import MovieList from "../components/MovieList/MovieList"



const HomePage = () => {
  const [item, setItem] = useState([])

  useEffect(() => {
    const getData = async () => {
      const dataElements = await getMovies('/movie/popular', { language: 'en-US', page: 1 })
      setItem(dataElements)
      
    }
    getData()
  }, [])
  console.log("jjj", item);
  
  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={item}/>
    </div>
  )
}

export default HomePage