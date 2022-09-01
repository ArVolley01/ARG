import { useState, useEffect } from "react"

import Moment from 'moment';


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
                    <p>{Moment(showtime.time).format('MMMM DD,  LT')}</p>
                </div>)
            }
        })}
        </div>
        </div>
    )
}

export default ShowtimesByMovie