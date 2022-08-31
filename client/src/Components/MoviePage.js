
import { useState, useEffect } from "react"

const MoviePage = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getBackend = async () => {
            let req = await fetch(`http://localhost:3000/movies`)
            let res = await req.json()
            setMovies(res)
        }
        getBackend()
    }, [])


    return (
        <div>
            {movies.map((movie, index) => {
                return (
                    <div key = { index }>
                        {//<img src={posters[index]} alt="movie poster" />
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default MoviePage