import React from 'react';

const Movie = ({
  Poster,
  Title,
  Year,
  handlerClickLike,
  handlerClickUnlike,
  like,
  unlike
}) => {
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
          <span
            onClick={handlerClickLike}
            className={`icon-like ${like ? 'is-liked' : ''}`}
          >
            &#10003;
          </span>
          <span
            onClick={handlerClickUnlike}
            className={`icon-unlike ${unlike ? 'is-unliked' : ''}`}
          >
            &#10005;
          </span>
        </div>
      </div>
    </li>
  );
};

export default Movie;
