import React from 'react';
import './movies.sass';

function MoviesLayout(props) {
  return <section className="moviesLayout">{props.children}</section>;
}

export default MoviesLayout;
