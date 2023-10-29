import { NavLink } from "react-router-dom";
import React from "react";
import './styles/Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar bg-dark justify-content-center p-3">
            <div className="d-flex justify-content-between w-50">
                <NavLink to={'/'} className="nav-link fw-bold fs-3 link-active">Home</NavLink>
                <a href='https://www.imdb.com/' className="nav-link fw-bold fs-3 link-hover" target="_blank">IMDB</a>
                <a href='https://www.themoviedb.org' className="nav-link fw-bold fs-3 link-hover" target="_blank">The Movie DB</a>
            </div>
        </nav>
    );
}
