
import { useState, useEffect } from "react"
import MoviePoster from './MoviePoster'

const MoviePage = ({movies, setCurrentMovie}) => {

    return (
        <div className="movieContainer">
            {movies.map((movie, index) => {
                return (
                    <div key = { index }>
                      <MoviePoster setCurrentMovie={setCurrentMovie} movie={movie}/>
                    </div>
                )
            })}
        </div>
    )
}

export default MoviePage