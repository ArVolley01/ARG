import {useState, useEffect} from 'react'

const TicketSection = ({currentMovie, theater, tickets}) =>
{
    const [ticketsPerShow, setTicketsPerShow] = useState(0)

    useEffect(() => {
        console.log(tickets)
        tickets.forEach((ticket) => {
            console.log(ticket)
            setTicketsPerShow(ticketsPerShow => ticketsPerShow+=1)
        })
    }, [])
   
    const buyTicket = () => {
        setTicketsPerShow(ticketsPerShow => ticketsPerShow-=1)

        let randomIndex = Math.floor(Math.random() * tickets.length);

        while(tickets[randomIndex].available === false)
        {
            randomIndex = Math.floor(Math.random() * tickets.length);
        }

        const item = tickets[randomIndex];

        const updateTickets = async () => {
            let req = await fetch(`http://localhost:3000/tickets/${item.id}/update`, {
            method: 'PATCH',
            body: JSON.stringify({
                available: false,
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            })
            let res = await req.json()
            console.log(res)
          }
        updateTickets()
    }
    return(
        <div>
        <p>{ticketsPerShow > 0 ? `Tickets: ${ticketsPerShow}` : "Tickets: Sold Out"}</p>
        {ticketsPerShow > 0 ? <button onClick={buyTicket}>Buy</button> : null}
        </div>
    )
}

export default TicketSection