
import { useState, useEffect } from "react"

const MoviePage = (props) => {

    const [poster, setPoster] = useState("")

    useEffect(() => {
        const getMovieDetails = async () => {
            let req = await fetch(`http://www.omdbapi.com/?t=${props.name.toLowerCase()}&apikey=7ebab2fe`)
            let res = await req.json()
            setPoster(res.Poster)
        }
        getMovieDetails()
    }, [props.name])


    return (
        <div>
            <img src={poster} alt="movie poster"/>
        </div>
    )
}

export default MoviePage