import './App.css';
import { useState, useEffect } from 'react'

function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      let req = await fetch('http://localhost:3000/movies')
      let res = await req.json()
      setMovies(res)
    }
    getMovies()
  }, [])

  return (
    <div className="App">
      <h2>
        Movie List
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
    </div>
  );
}

export default App;