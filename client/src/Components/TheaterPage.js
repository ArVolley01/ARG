import TheaterSection from './TheaterSection'

const TheaterPage = ({theaters, setCurrentTheater, setCurrentMovie}) =>
{
    return(
        <div>
            {theaters.map((theater, index) => {
                return (
                    <div key = { index }>
                      <TheaterSection setCurrentMovie={setCurrentMovie} setCurrentTheater={setCurrentTheater} theater={theater}/>
                    </div>
                )
            })}
        </div>
    )
}

export default TheaterPage