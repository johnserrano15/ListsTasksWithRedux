import React from 'react';

const Movie = ({ Poster, Title, Year }) => {
  const like = false,
    unlike = false;
  return (
    <li className="movie">
      <img src={Poster} alt={Title} />
      <div className="Movie-content">
        <div className="Movie-meta">
          <h2>
            {Title} - {Year}
          </h2>
        </div>
        <div className="Movie-actions">
          <span className={`icon-like ${like ? 'is-liked' : ''}`}>
            &#10003;
          </span>
          <span className={`icon-unlike ${unlike ? 'is-unliked' : ''}`}>
            &#10005;
          </span>
        </div>
      </div>
    </li>
  );
};

export default Movie;
