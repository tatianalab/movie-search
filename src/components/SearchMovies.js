import React, {useState} from 'react'
import './SearchMovies.css'
import MovieCard from './MovieCard'


const SearchMovies = () => {

  const [query,setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async(e) =>{
    e.preventDefault();


    const url = `https://api.themoviedb.org/3/search/movie?api_key=95f5edfe12c7b477d656e4f6cbe30695&language=en-US&query=${query}&page=1&include_adult=false`;

    try{
    const res = await fetch(url);
    const data = await res.json()
    setMovies(data.results)
    }catch(err){
      console.log(err);
    }

  }


  return (
    <div>
      <form action="" className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className='label'>Movie Name</label>
        <input className='input'
        type="text" name='query'
        placeholder="i.e Titanic"
        value={query} onChange={(e) => setQuery(e.target.value)}
        />
        <button className='button' type="submit">Let do this!</button>
      </form>
      <div className="card-list">
        {movies.filter(movie => movie.poster_path).map(movie => (
          <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  )
}

export default SearchMovies
