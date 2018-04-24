import React from 'react';
import Movie from './movie';
import Footer from './footer';
import './listMovies.sass';

const ListMovies = ({
  movies,
  handlerClickLike,
  handlerClickUnlike,
  likesCount
}) => (
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
    <Footer {...likesCount} all={movies.length} />
  </ul>
);

export default ListMovies;
