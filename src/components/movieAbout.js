import React from 'react';
import '../App.css';

function AboutPage(props) {
    const Movie= props.movies.find(movie=> movie.id === props.match.params.id  )
    
    return(
        <div className='wrapper'>
            <p className="movie-info">{Movie.Description}</p>
            <iframe width="727" height="409" src={Movie.Trailer} title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
            </iframe>
            <button onClick={()=> props.history.goBack()}   >go back</button>
            <button  onClick={()=>props.history.push("/")}  >home</button>
        </div>
    );
}
export default AboutPage;


