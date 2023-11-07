import {
    URL_IMAGES,
} from '../settings';
import { useNavigate } from 'react-router-dom';

export default function Card({ movie }) {

    const navigate = useNavigate();

    const handleClick = movieId => navigate("/details/" + movieId);

    return (
        <div className="card m-3 shadow-sm col-lg-3 col-md-4 p-0">
            <img className="card-img-top" src={`${URL_IMAGES}${movie.backdrop_path}`} alt="" />
            <div className="card-body d-flex flex-column justify-content-between">
                <div className='mb-3'>
                    <h3>{movie.title}</h3>
                    <h5 className="card-subtitle mb-2 text-muted">{movie.release_date}</h5>
                    <p className="card-text">{movie.overview}</p>
                </div>
                <button onClick={() => handleClick(movie.id)} className="btn btn-outline-primary w-50">See More</button>
            </div>
        </div>
    )

};