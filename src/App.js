import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import UpcomingFilms from './pages/UpcomingFilms';
import MovieDetails from './pages/MovieDetails';
import Navbar from "./components/Navbar";

export default function App() {

  return (
    <div className="">

      <BrowserRouter>

        <Navbar></Navbar>
        
        <Routes>
          <Route path="/" element={<UpcomingFilms/>} />
          <Route path="/details/:movieId" element={<MovieDetails/>} />
        </Routes>

        <footer className='navbar bg-dark px-5 py-3 d-flex justify-content-center'>
          <h5 className="text-light text-center">Upcoming Films Project 2023 &copy;</h5>
        </footer>

      </BrowserRouter>

    </div>
  );
}