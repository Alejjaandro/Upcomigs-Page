import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import './App.css';
import UpcomingFilms from './pages/UpcomingFilms';
import MovieDetails from './pages/MovieDetails';

export default function App() {

  return (
    <div className="">

      <BrowserRouter>

        <nav className='navbar bg-dark px-5 py-3'>
          <NavLink to="/" className="text-decoration-none text-light"> Upcomings </NavLink>
          <NavLink to="https://www.imdb.com/" className="text-decoration-none text-light " target="_blank"> IMDB </NavLink>
          <NavLink to="https://www.themoviedb.org/" className="text-decoration-none text-light" target="_blank"> The Movie Data Base </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<UpcomingFilms/>} />
          <Route path="/details/:movieId" element={<MovieDetails/>} />
        </Routes>

        <footer className='navbar bg-dark px-5 py-3'>
          <h5 className="text-light text-center">CodeSpace Academy 2023 &copy;</h5>
        </footer>

      </BrowserRouter>

    </div>
  );
}