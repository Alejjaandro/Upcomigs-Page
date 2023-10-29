import { useState } from "react";
import { useParams } from "react-router"
import { useFetch } from "../hooks/useFetch";
import { URL_DETAILS, URL_IMAGES, IMDB_URL } from "../settings";

export default function MovieDetails() {

    const [movie, setMovie] = useState({});
    const { movieId } = useParams();

    useFetch(URL_DETAILS.replace("{movie_id}", movieId), setMovie)

    return (
        <div className="pb-5 min-vh-100">
            <img className="w-100 h-auto" src={`${URL_IMAGES + movie.backdrop_path}`} alt="" />

            <div className="container">
                <div className="my-5 text-center">
                    <h1 className="display-1">{movie.title}</h1>
                    <span className="ms-3 fs-6 badge bg-primary">{movie.original_language}</span>
                    <span className="ms-3 fs-6 badge bg-primary">{movie.vote_average}⭐</span>
                </div>

                <h2>{movie.tagline}</h2>
                <h6 className="card-subtitle mb-2 text-muted">{movie.release_date}</h6>
                <p className="my-3">{movie.overview}</p>
                <a className="btn btn-warning w-25" href={IMDB_URL + movie.imdb_id} target="_blank">IMDb</a>
            </div>
        </div>
    )
}
