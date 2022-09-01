import { useState, useEffect } from "react"

const ShowtimesByMovie = ({theater, currentMovie}) => {
    const [showtimes, setShowtimes] = useState([])

    useEffect(() => {
        const getShowtimes = async () => {
            let req = await fetch(`http://localhost:3000/movies/${currentMovie.id}/theaters/${theater.id}/showtimes`)
            let res = await req.json()
            if(res) {
                console.log(res)
                setShowtimes(res)
            }
          }
          getShowtimes()
    }, [])

    return(
        <div>
        <h2>{theater.name}</h2>
        <div>
        {showtimes.map((showtime, index) => {
            if(showtime.tickets) {
                return(
                <div>
                <p>{showtime.time}</p>
                </div>)
            }
        })}
        </div>
        </div>
    )
}

export default ShowtimesByMovie