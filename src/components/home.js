import React from 'react';
import Popcorn from "./Popcorn.png"
import '../App.css';

function Home() {
    return (
        <div>
            <img className='logo' src={Popcorn} alt = "site logo" /> 
           <h1 style={{backgroundColor:'white', color:"#5e5c5c", fontFamily:"monospace", fontWeight:"bolder", textAlign:'center'}}> Welcome to our home page, happy binging.</h1>
        </div>
    )
}

export default Home;