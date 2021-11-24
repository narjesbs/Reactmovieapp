import React from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap';
import Popcorn from "./Popcorn.png"
import AddMovie from './newMovie';
import FilterMovie from './filter';
import StarRatingComponent from 'react-star-rating-component';

function Navigation ({movies,setMovies,setSearch,setStarrating}){
    const onStarClick = (newRating) => {
        setStarrating(newRating);
      }
    return (
        <Navbar style={{ backgroundColor:'#222121'}} expand="lg">
        <Container fluid>
            <Navbar.Brand href="#" style={{ color:'white'}}>
                <img src={Popcorn} alt = "site logo" style = {{width:"20%"}}></img> 
                    Popcorn in Bed
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                <FilterMovie setSearch={setSearch} />
                <AddMovie movies={movies} setMovies={setMovies} />
                <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    onChange={onStarClick}
                    starColor={'#ffc107'} 
                    emptyStarColor={'#e4e5e9'} 
        />
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
  
}
export default Navigation;