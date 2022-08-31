import { useState, useEffect } from "react"

const SelectedMovie = ({ currentMovie }) => {

  const [movieDetails, setMovieDetails] = useState([])

  useEffect(() => {
    const getMovieDetails = async () => {
      let req = await fetch(`http://www.omdbapi.com/?i=${currentMovie.imdb_id}&apikey=7ebab2fe`)
      let res = await req.json()
      // console.log(res)
      setMovieDetails(res)
    }
    getMovieDetails()
  }, [])

  return (
    <div>
      <h1>{movieDetails.Title} ({movieDetails.Rated}) </h1>
      <img src={movieDetails.Poster} alt={movieDetails.Title} />
      <h2>Director: {movieDetails.Director}</h2>
      <h2>Genre: {movieDetails.Genre} | Runtime: {movieDetails.Runtime}</h2>
      <h3>{movieDetails.Plot}</h3>
      <h3>Metascore: {movieDetails.Metascore}</h3>
    </div>
  )


}

export default SelectedMovie