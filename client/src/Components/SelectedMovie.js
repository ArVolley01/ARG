import { useState, useEffect } from "react"

const SelectedMovie = ({ currentMovie, theaters }) => {

  const [movieDetails, setMovieDetails] = useState([])
  const [showtimes, setShowtimes] = useState([])

  useEffect(() => {
    const getMovieDetails = async () => {
      let req = await fetch(`http://www.omdbapi.com/?i=${currentMovie.imdb_id}&apikey=7ebab2fe`)
      let res = await req.json()
      // console.log(res)
      setMovieDetails(res)
    }
    const getShowtimes = async () => {
      let req = await fetch(`http://localhost:3000/movies/${currentMovie.id}/showtimes`)
      let res = await req.json()
      console.log(res)
      setShowtimes(res)
    }
    getMovieDetails()
    getShowtimes()
  }, [])

    

  return (
    <div>
      <h1>{movieDetails.Title} ({movieDetails.Rated}) </h1>
      <img src={movieDetails.Poster} alt={movieDetails.Title} />
      <h3>Director: {movieDetails.Director}</h3>
      <h4>Genre: {movieDetails.Genre} | Runtime: {movieDetails.Runtime}</h4>
      <h4>{movieDetails.Plot}</h4>
      <h5>Metascore: {movieDetails.Metascore}</h5>
      <h2>Showtimes</h2>
      
    </div>
  )


}

export default SelectedMovie