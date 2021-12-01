import React from 'react';
import {Button} from 'react-bootstrap';
import '../App.css';

function AboutPage(props) {
    const Movie= props.movies.find((movie) => movie.id === props.match.params.id  )
    
    return(
        <div>
            <div className='wrapper'>
                <h5 className="card-title">{Movie.Title}</h5>
                <p style= {{maxWidth: "600px", fontSize: ".900em", color: "#5e5c5c"}}>{Movie.Description}</p>
                <iframe width="1000" height="500" src={Movie.Trailer} title="YouTube video player" frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            </div>
            <div style={{ display: "flex",justifyContent: "center", alignItems: "center" }} >
                <Button variant="secondary" onClick={()=> props.history.goBack()}>Go Back</Button>
                <Button variant="secondary" onClick={()=>props.history.push("/")}>Home</Button>
            </div>
        </div>
    );
}
export default AboutPage;


