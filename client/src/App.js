import './App.css';
import { useState, useEffect } from 'react'

function App() {

  const [movies, setMovies] = useState([])
  const [theaters, setTheaters] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      let req = await fetch('http://localhost:3000/movies')
      let res = await req.json()
      console.log(res)
      setMovies(res)
    }
    const getTheaters = async () => {
      let req = await fetch('http://localhost:3000/theaters')
      let res = await req.json()
      console.log(res)
      setTheaters(res)
    }
    getMovies()
    getTheaters()
  }, [])

  return (
    <div className="App">
      <h2>
        Movies
      </h2>
      {
        movies.map((movie) => {
          return (
            <div key={movie.id}>
              <h4>{movie.name}</h4>
            </div>
          )
        })
      }
      <h2>
        Theaters
      </h2>
      {
        theaters.map((theater) => {
          return (
            <div key={theater.id}>
              <h4>{theater.name}</h4>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;