import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import '../App.css';

function MovieCard ({el})  {
	return (
            <div className="movie-card">
		        <img src={el.PosterURL} className="card-img-top" alt="..." />
		        <div className="card-body">
		            <h5 className="card-title">{el.Title}
					<StarRatingComponent value= {el.Rating}/>
					</h5>
		   		    <span className="movie-info">{el.Description}</span>
				</div>
		    </div>
	);
}
export default MovieCard;