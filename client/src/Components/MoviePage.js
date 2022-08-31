
import { useState, useEffect } from "react"

const MoviePage = () => {

    const [posters, setPosters] = useState([])
    const [movies, setMovies] = useState([])

    useEffect(() => {
        let newPosters = []
        const getMovieDetails = async (name) => {
            let req = await fetch(`http://www.omdbapi.com/?t=${name}&apikey=7ebab2fe`)
            let res = await req.json()
            newPosters.push(res.Poster)
        }
        const getBackend = async () => {
            let req = await fetch(`http://localhost:3000/movies`)
            let res = await req.json()
            setMovies(res)
            res.forEach((element) => {
                getMovieDetails(element.name)
            });
            setPosters(newPosters)
        }
        getBackend()
    }, [])


    return (
        <div>
            {console.log(posters[0])}
            {movies.map((movie, index) => {
                return (
                    <div key = { index }>
                        <img src={posters[index]} alt="movie poster" />
                    </div>
                )
            })}
        </div>
    )
}

export default MoviePage