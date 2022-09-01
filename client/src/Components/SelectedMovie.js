import { useState, useEffect } from "react"
import ShowtimesByMovie from './ShowtimesByMovie.js';

const SelectedMovie = ({ currentMovie, theaters }) => {

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
      <h3>Director: {movieDetails.Director}</h3>
      <h4>Genre: {movieDetails.Genre} | Runtime: {movieDetails.Runtime}</h4>
      <h4>{movieDetails.Plot}</h4>
      <h5>Metascore: {movieDetails.Metascore}</h5>
      <h2>Showtimes</h2>
      {theaters.map((theater, index) => {
                return (
                    <div key = { index }>
                      <ShowtimesByMovie theater={theater} currentMovie={currentMovie}/>
                    </div>
                )
            })}
    </div>
  )


}

export default SelectedMovie