import React from 'react';
import Movie from './movie';
import './listMovies.sass';

const ListMovies = ({ movies, handlerClickLike, handlerClickUnlike }) => (
  <ul className="listMovies">
    {movies.map((movie, index) => (
      <Movie
        key={movie.imdbID}
        {...movie}
        handlerClickLike={() =>
          handlerClickLike(movie.imdbID, movie.like, movie.unlike)
        }
        handlerClickUnlike={() =>
          handlerClickUnlike(movie.imdbID, movie.unLike, movie.like)
        }
      />
    ))}
  </ul>
);

export default ListMovies;
