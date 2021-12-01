import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import '../App.css';

function MovieCard ({movie})  {
	return (
            <div className="movie-card">
		        <img src={movie.PosterURL} className="card-img-top" alt="..." />
		        <div className="card-body">
		            <h5 className="card-title">{movie.Title}
					<StarRatingComponent value= {movie.Rating}/>
					<Link  to={`/AboutPage/${movie.id}`}  >   
						<Button variant="secondary">want to know more</Button>
					</Link>
					</h5>
				</div>
		    </div>
	);
}
export default MovieCard;