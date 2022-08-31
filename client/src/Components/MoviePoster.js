import {useState, useEffect} from 'react'


const MoviePoster = ({movie} ) => {
  const [movieDetails, setMovieDetails] = useState([])

  useEffect(() => {
    const getMovieDetails = async () => {
      let req = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=7ebab2fe`)
      let res = await req.json()
      setMovieDetails(res)
    }
    getMovieDetails()
  }, [])
    return (
        <div>
            <h2>{movieDetails.Title} ({movieDetails.Rated})</h2>
        <img src={movieDetails.Poster} alt={movieDetails.Title} />
            <h4>Released: {movieDetails.Released}</h4>
            <h4>Genre: {movieDetails.Genre}</h4>
            <h4>Director: {movieDetails.Director}</h4>
            <h5>{movieDetails.Plot}</h5>
            <h4>Metascore: {movieDetails.Metascore}</h4>
            </div>
    )
}

export default MoviePoster