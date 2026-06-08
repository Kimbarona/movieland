import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = `https://www.omdbapi.com?apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('spiderman');
  },[]);


  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className='search'>
        <input 
          placeholder='search for movies' 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />

          <img 
            src={SearchIcon} 
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          /> 
      </div>

      {
        movies?.length > 0 ?
        (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} onClick={() => setSelectedMovie(movie)}/>
            ))}
          </div>
        ):(
          <div className='empty'>
            <h2>No movies found!</h2>
          </div>
        )
      }

      {selectedMovie && (
        <div className="overlay" onClick={() => setSelectedMovie(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedMovie(null)}>&times;</button>
            <div className="modal-content">
              <img
                src={selectedMovie.Poster !== 'N/A' ? selectedMovie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'}
                alt={selectedMovie.Title}
                className="modal-poster"
              />
              <div className="modal-info">
                <h2>{selectedMovie.Title}</h2>
                <p className="modal-year">{selectedMovie.Year}</p>
                <p className="modal-type">{selectedMovie.Type}</p>
                <a
                  className="watch-btn"
                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(selectedMovie.Title + ' official trailer')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ▶ Watch Trailer on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

  );
}

export default App;
