import React from 'react';
import Movie from './movie';
import './listMovies.sass';

const ListMovies = ({ movies }) => (
  <ul className="listMovies">
    {movies.map((movie, index) => <Movie key={movie.imdbID} {...movie} />)}
  </ul>
);

export default ListMovies;
