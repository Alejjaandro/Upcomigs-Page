import {
    URL_IMAGES,
} from '../settings';
import { useNavigate } from 'react-router-dom';

export default function Card ({movie}) {

    const navigate = useNavigate();

    const handleClick = movieId => navigate("/details/" + movieId);
        
    return (
        <div className="card flex-grow-1 col-4">
            <img className="card-img-top" src={`${URL_IMAGES}${movie.backdrop_path}`} alt="Film IMAGE"/>
            <div className="card-body">
                <h3>{movie.title}</h3>
                <h5>{movie.release_date}</h5>
                <p className="card-text">{movie.overview}</p>
                <button onClick={() => handleClick(movie.id)} className="btn btn-primary">See More</button>
            </div>
        </div>
    )    

};