import { useState } from "react";
import { useParams } from "react-router"
import {useFetch}  from "../hooks/useFetch";
import { URL_DETAILS, URL_IMAGES, IMDB_URL } from "../settings";

export default function MovieDetails() {

    const [movie, setMovie] = useState({});
    const { movieId } = useParams();

    useFetch(URL_DETAILS.replace("{movie_id}", movieId), setMovie)
    
    const imgStyles = {backgroundImage: `url(${URL_IMAGES + movie.backdrop_path}`, height:"500px", backgroundSize: "cover", backgroundPosition:"center center"};

    return (
        <div className="flex-grow-1 pb-5">
            <div className="w-100" style={imgStyles}></div>
            <div className="container px-5">
                <h1 className="display-1 text-center my-5">
                    {movie.title}
                    <span className="ms-3 fs-6 badge bg-primary">{movie.original_language}</span>
                    <span className="ms-3 fs-6 badge bg-primary">{movie.vote_average}⭐</span>
                </h1>
                <h2>{movie.tagline}</h2>
                <h6 className="card-subtitle mb-2 text-muted">{movie.release_date}</h6>
                <p className="my-3">{movie.overview}</p>
                <a className="ms-auto btn btn-warning" href={IMDB_URL + movie.imdb_id} target="_blank">IMDb</a>
            </div>
        </div>
    )
}
