import { useState, useEffect } from "react"

const ShowtimesByMovie = ({theater, currentMovie}) => {
    const [showtimes, setShowtimes] = useState([])
    const [ticketsAvailable, setTicketsAvailable] = useState(0)

    useEffect(() => {
        const getShowtimes = async () => {
            let req = await fetch(`http://localhost:3000/movies/${currentMovie.id}/theaters/${theater.id}/showtimes`)
            let res = await req.json()
            if(res) {
                console.log(res)
                setShowtimes(res)
                res.forEach((showtime) => {
                    showtime.tickets.forEach((ticket) => {
                        console.log(ticket)
                        setTicketsAvailable(ticketsAvailable => ticketsAvailable+=1)
                      })
            })
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
                <h5>{showtime.time}</h5>
                <h5>{ticketsAvailable}</h5>
                </div>)
            }
        })}
        </div>
        </div>
    )
}

export default ShowtimesByMovie