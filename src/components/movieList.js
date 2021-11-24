import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import MovieCard from './movieCard.js';

import '../App.css';

function MovieList ({movies,search,starRating})  {
	return (
		<div className= "wrapper">
			<Carousel>
				
			{ 
                movies.filter(el => el.Title.toUpperCase().includes(search.toUpperCase().trim()) 
								 && el.Rating <= starRating 
							 )
						.map((el) => ( 
							<Carousel.Item interval={1000}>
							<MovieCard  el = {el} />
							</Carousel.Item>
						 )
						)				
            }
			</Carousel>
		</div>
	);
};
export default MovieList;