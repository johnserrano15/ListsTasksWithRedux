import api from '../api/index';
import * as type from '../actions/types';

const initialState = {
  likesCount: {
    likeCount: 0,
    unlikeCount: 0
  },
  data: []
};

const likesCount = (state = initialState.likesCount, action) => {
  switch (action.type) {
    case type.LIKE: {
      const likes = {
        likeCount: !action.payload.like
          ? state.likeCount + 1
          : state.likeCount - 1,
        unlikeCount: action.payload.unlike
          ? state.unlikeCount - 1
          : state.unlikeCount
      };
      return likes;
    }

    case type.UNLIKE: {
      const unlikes = {
        unlikeCount: !action.payload.unlike
          ? state.unlikeCount + 1
          : state.unlikeCount - 1,
        likeCount: action.payload.like ? state.likeCount - 1 : state.likeCount
      };
      return unlikes;
    }

    case type.SEARCH: {
      return { likeCount: 0, unlikeCount: 0 };
    }

    default:
      return state;
  }
};

const dataMovies = (state = initialState.data, action) => {
  switch (action.type) {
    case type.LOAD_MOVIES: {
      return action.payload.dataMovies;
    }

    case type.LIKE: {
      // console.log(state);
      const newState = state.map(movie => {
        if (movie.imdbID !== action.payload.id) {
          return movie;
        }
        return {
          ...movie,
          like: !movie.like,
          unlike: !movie.like ? false : movie.unlike
        };
      });
      return newState;
    }
    case type.UNLIKE: {
      const newState = state.map(movie => {
        if (movie.imdbID !== action.payload.id) {
          return movie;
        }
        // console.log(movie);
        return {
          ...movie,
          like: !movie.unlike ? false : movie.like,
          unlike: !movie.unlike
        };
      });
      return newState;
    }

    case type.SEARCH: {
      return action.payload.dataMovies;
    }

    default:
      return state;
  }
};

// export default likes;
export { dataMovies, likesCount };
