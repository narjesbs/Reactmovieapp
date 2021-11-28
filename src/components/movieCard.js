import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import '../App.css';

function MovieCard ({el})  {
	return (
            <div className="movie-card">
		        <img src={el.PosterURL} className="card-img-top" alt="..." />
		        <div className="card-body">
		            <h5 className="card-title">{el.Title}
					<StarRatingComponent value= {el.Rating}/>
					<Link  to={`/AboutPage/${el.id}`}  >   
						<Button variant="primary">Go somewhere</Button>
					</Link>
					</h5>
				</div>
		    </div>
	);
}
export default MovieCard;