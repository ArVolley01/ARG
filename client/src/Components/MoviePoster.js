import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


const MoviePoster = ({movie, setCurrentMovie} ) => {
  const [movieDetails, setMovieDetails] = useState([])

  let navigate = useNavigate()

  useEffect(() => {
    const getMovieDetails = async () => {
      let req = await fetch(`http://www.omdbapi.com/?i=${movie.imdb_id}&apikey=7ebab2fe`)
      let res = await req.json()
      setMovieDetails(res)
    }
    getMovieDetails()
  }, [])

  const handleClick = () => {
    setCurrentMovie(movie)
    navigate(`/movie/${movie.id}`)
  }
    return (
        <div className='movieCard' >
            <h2 onClick={handleClick} className="movieTitle" >{movieDetails.Title} <br /> ({movieDetails.Rated})</h2>
        <img onClick={handleClick} src={movieDetails.Poster} alt={movieDetails.Title} className="moviePoster" />
        <h4 className='genreAndRuntime' >{movieDetails.Genre} | Runtime: {movieDetails.Runtime}</h4>
            {/* <h5>{movieDetails.Plot}</h5> */}
            {/* <h4>Metascore: {movieDetails.Metascore}</h4> */}
            </div>
    )
}

export default MoviePoster