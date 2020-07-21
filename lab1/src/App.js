import React from 'react';
import './App.css';
import movieData from './movie.json';

const imgSrcBaseUrl = 'http://image.tmdb.org/t/p/w342/';

function Poster(props) {
  return (
    <div className="poster">
      <img alt={props.title} src={imgSrcBaseUrl + props.poster_path}/>
      <h3 className="poster--title">{props.title}</h3>
      <span>Release Date: {props.release_date}</span>
      <br/>
      <span>Average Score: {props.vote_average}</span>
    </div>
  )
}

function App() {
  return (
    <div className="movie-app">
      <div className="movie-app__header">
        <h1 className="movie-app__header--title">{movieData.name}</h1>
      </div>
      <div className="movie-app__content">
        {movieData.items.map((movie) => {
          return Poster(movie);
        })}
      </div>
    </div>
  );
}

export default App;
