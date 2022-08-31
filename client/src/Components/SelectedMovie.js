import { useState, useEffect } from "react"

const SelectedMovie = ({ movie }) => {

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
      
    </div>
  )


}

export default SelectedMovie