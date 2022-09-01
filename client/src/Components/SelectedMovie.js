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
    <div className="selectedMovieContainer">
        <h1 className="selectedMovieTitle" >{movieDetails.Title} ({movieDetails.Rated}) </h1>
        <img className="selectedMoviePoster" src={movieDetails.Poster} alt={movieDetails.Title} />
        <div className="movieDetailcontainer">
      <h4 className="selectedMovieDetail" >Synopsis: <br></br> {movieDetails.Plot}</h4>
      
      <h4 className="selectedMovieDetail" >Genre: {movieDetails.Genre} </h4>
      <h3 className="selectedMovieDetail" >Director: {movieDetails.Director}</h3>
      <h4 className="selectedMovieDetail">Runtime: {movieDetails.Runtime}</h4>
      <h5 className="selectedMovieDetail" >Metascore: {movieDetails.Metascore}</h5>
      </div>
      <h2 className="selectedMovieDetail" >Showtimes:</h2>
      {theaters.map((theater, index) => {
                return (
                  <div className="selectedMovieDetail" key = { index }>
                      <ShowtimesByMovie theater={theater} currentMovie={currentMovie}/>
                    </div>
                )
            })}
    </div>
  )


}

export default SelectedMovie