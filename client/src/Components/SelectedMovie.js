import { useState, useEffect } from "react"

const SelectedMovie = ({ currentMovie }) => {

  const [movieDetails, setMovieDetails] = useState([])

  useEffect(() => {
    const getMovieDetails = async () => {
      let req = await fetch(`http://www.omdbapi.com/?i=${currentMovie.imdb_id}&apikey=7ebab2fe`)
      let res = await req.json()
      setMovieDetails(res)
    }
    getMovieDetails()
  }, [])

  return (
    <div>
      
    </div>
  )


}

export default SelectedMovie