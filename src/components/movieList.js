import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import MovieCard from './movieCard.js';

import '../App.css';

function MovieList ({movies,search,starRating})  {
	return (
		<div className= "wrapper">
			<Carousel>
			{ 
                movies.filter(movie => movie.Title.toUpperCase().includes(search.toUpperCase().trim()) 
								 /*&& movie.Rating <= starRating*/ 
							 )
						.map((movie) => ( 
							<Carousel.Item interval={1000}>
							<MovieCard  movie = {movie} key={movie.id} />
							</Carousel.Item>
						 )
						)				
            }
			</Carousel>
		</div>
	);
};
export default MovieList;