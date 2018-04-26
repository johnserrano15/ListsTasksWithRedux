import React from 'react';
import Movie from './movie';
import Footer from './footer';
import './listMovies.sass';

const ListMovies = ({
  movies,
  handlerClickLike,
  handlerClickUnlike,
  likesCount
}) => {
  if (movies.length > 0) {
    return (
      <ul className="listMovies">
        {movies.map((movie, index) => (
          <Movie
            key={movie.imdbID}
            {...movie}
            handlerClickLike={() =>
              handlerClickLike(movie.imdbID, movie.like, movie.unlike)
            }
            handlerClickUnlike={() =>
              handlerClickUnlike(movie.imdbID, movie.like, movie.unlike)
            }
          />
        ))}
        <Footer {...likesCount} all={movies.length} />
      </ul>
    );
  }
  return <p>La cantidad de movies es: {movies.length}</p>;
};

export default ListMovies;
