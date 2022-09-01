import TheaterMoviePoster from './TheaterMoviePoster'

const TheaterSection = ({theater, setCurrentTheater, setCurrentMovie}) => 
{
    const unique = [...new Map(theater.movies.map((m) => [m.id, m])).values()];

    return(
      <div>
        <h1 className='theaterName'>{theater.name} Theater</h1>
        <h3 className='theaterAddress' >{theater.street_address}</h3>
        <div className='theaterContainer'>
        {unique.map((movie, index) => {
            return(
            <div key = { index } className="theaterMovieCard" >
                <TheaterMoviePoster setCurrentMovie={setCurrentMovie} movie={movie}/>
          </div>
            )
          })}
        </div>
        <hr></hr>
      </div>
    )
}

export default TheaterSection