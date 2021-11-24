import React, { useState} from 'react';
import MovieList from './components/movieList.js';
import Navigation from './components/navigation.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App () {  
  const [movies, setMovies] = useState([        
        {
          Title: "The Lord of the Rings: The Return of the King",
          Description: "The conclusion to Peter Jackson's epic trilogy based on the timeless J.R.R. Tolkien classic, The Lord of the Rings: The Return of the King presents the final confrontation between the forces of good and evil fighting for control of the future of Middle-earth.",
          Rating: "4",
          PosterURL: "https://m.media-amazon.com/images/I/51ySlqPl1fL._AC_SY580_.jpg"
        },
        {
          Title: "The Shawshank Redemption",
          Description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency. Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit.",
          Rating: "5",
          PosterURL: "https://cdn.shopify.com/s/files/1/1416/8662/products/shawshank_redemption_R04_original_film_art_0f1daca1-7988-4d31-a293-56a8271769bf_5000x.jpg?v=1609534845"
        },
        {
          Title: "The Age of Adaline",
          Description: "When a beautiful 29-year-old woman who has lived for more than a century but hasn't aged falls in love, the secrets of her past unravel.",
          Rating: "3",
          PosterURL: "https://m.media-amazon.com/images/I/81Zwy47rRqL._AC_SL1500_.jpg"
        },
        {
          Title: "Hocus Pocus",
          Description: "A curious youngster moves to Salem, where he struggles to fit in before awakening a trio of diabolical witches that were executed in the 17th century. 300 years have passed since the Sanderson sisters were executed for practicing dark witchcraft.",
          Rating: "3",
          PosterURL: "https://i5.walmartimages.com/asr/d2a76d72-f59f-47ad-80d7-6599f86f1b9b_1.cb3e6a7e5687b32695cd41f7b0ff4010.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        },
        {
          Title: "Princesse Mononoké",
          Description: "A period drama set in the late Muromachi period (approximately 1337 to 1573) of Japan, but with fantasy elements. The story follows the young Emishi warrior Ashitaka's involvement in the struggle between the supernatural guardians of a forest and the humans who consume its resources.",
          Rating: "5",
          PosterURL: "https://m.media-amazon.com/images/I/91yyhjCmk3L._SL1500_.jpg"
        },
        {
          Title: "The Taking of Deborah Logan",
          Description: "A found footage supernatural horror film. ... Set in Virginia, it tells the story of a documentary crew making a film about Alzheimer's patients who uncover something sinister while documenting a woman who has the disease.",
          Rating: "3",
          PosterURL: "https://m.media-amazon.com/images/M/MV5BZWQ3YmU4ZjYtZGE2Ni00NjhiLTk2NTMtYmVmYmNkNWViYzUxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg"
        }
      ]);
    const [search, setSearch] = useState("");
    const [starRating, setStarrating] = useState(0);
	return (
		<div className='App'>
      <Navigation movies={movies} setMovies={setMovies} setSearch={setSearch} setStarrating={setStarrating} />
      <div>
        <MovieList movies={movies} search={search} starRating={starRating} />
      </div>
		</div>
	);
}

export default App;

