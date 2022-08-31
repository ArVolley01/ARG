import TheaterMoviePoster from './TheaterMoviePoster'

const TheaterSection = ({theater, setCurrentTheater, setCurrentMovie}) => 
{
    const unique = [...new Map(theater.movies.map((m) => [m.id, m])).values()];

    return(
        <div>
        <h1>{theater.name}</h1>
        {unique.map((movie, index) => {
            return(
            <div key = { index }>
                <TheaterMoviePoster setCurrentMovie={setCurrentMovie} movie={movie}/>
          </div>
            )
        })}
        </div>
    )
}

export default TheaterSection