import './App.css';
import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import PlaceHolder from './Components/Placeholder'
import NavBar from './Components/NavBar';
import MoviePage from './Components/MoviePage';
import SelectedMovie from './Components/SelectedMovie';
import TheaterPage from './Components/TheaterPage';
import SelectedTheater from './Components/SelectedTheater';

function App() {

  // const [movies, setMovies] = useState([])

  // useEffect(() => {
  //   const getMovies = async () => {
  //     let req = await fetch('http://localhost:3000/movies')
  //     let res = await req.json()
  //     setMovies(res)
  //   }
  //   getMovies()
  // }, [])

  //   < h2 >
  //   Movie List
  //     </h2 >
  // {
  //   movies.map((movie) => {
  //     return (
  //       <div key={movie.id}>
  //         <h4>{movie.name}</h4>
  //       </div>
  //     )
  //   })
  // }


  const [movies, setMovies] = useState([])
  const [theaters, setTheaters] = useState([])
  const [currentMovie, setCurrentMovie] = useState({})
  const [currentTheater, setCurrentTheater] = useState({})

  useEffect(() => {
    const getBackend = async () => {
      let req = await fetch(`http://localhost:3000/movies`)
      let res = await req.json()
      setMovies(res)
    }
    getBackend()
  }, [])

  useEffect(() => {
    const getBackend = async () => {
      let req = await fetch(`http://localhost:3000/theaters`)
      let res = await req.json()
      setTheaters(res)
    }
    getBackend()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<PlaceHolder from="Home" />} />
          <Route path="/movie" element={<MoviePage setCurrentMovie={setCurrentMovie} movies={movies} name="the batman" />} />
          <Route path={`/movie/${currentMovie.id}`} element={<SelectedMovie currentMovie={currentMovie} theaters={theaters} />} />
          <Route path="/theater" element={<TheaterPage setCurrentMovie={setCurrentMovie} setCurrentTheater={setCurrentTheater} theaters={theaters}/>}/>
          <Route path={`/theater/${currentTheater.id}`} element={<SelectedTheater currentMovie={currentMovie}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;