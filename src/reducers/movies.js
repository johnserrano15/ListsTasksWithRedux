import api from '../api/index';
import { SEARCH, LIKE, UNLIKE } from '../actions/types';

const movies = async () => {
  try {
    const listMovies = await api.movies.getMovies();
    const dataMovies = [];
    // console.log(listMovies);
    listMovies.Search.map((movie, index) => {
      dataMovies[index] = {
        ...movie,
        like: false,
        unlike: false
      };
    });

    // console.log(dataMovies);
    return dataMovies;
  } catch (err) {
    console.log(`Algo salio mal ${err}`);
  }
};

/* async function search(name) {
  try {
    const listMovies = await api.movies.getMovies(null, name);
    const dataMovies = [];
    // console.log(listMovies);
    if (listMovies.Response !== 'False') {
      listMovies.Search.map((movie, index) => {
        dataMovies[index] = { ...movie, like: false, unlike: false };
      });
    }
    // console.log(dataMovies);
    return dataMovies;
  } catch (err) {
    console.log(`Algo salio mal ${err}`);
  }
} */

const initialState = {
  likesCount: {
    likeCount: 0,
    unlikeCount: 0
  },
  data: []
};

const likesCount = (state = initialState.likesCount, action) => {
  switch (action.type) {
    case LIKE: {
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

    case UNLIKE: {
      const unlikes = {
        unlikeCount: !action.payload.unlike
          ? state.unlikeCount + 1
          : state.unlikeCount - 1,
        likeCount: action.payload.like ? state.likeCount - 1 : state.likeCount
      };
      return unlikes;
    }

    case SEARCH: {
      // if (!action.payload.value.length) {
      //   return state;
      // }
      return { likeCount: 0, unlikeCount: 0 };
    }

    default:
      return state;
  }
};

// const dataMoviesInitial = (state = [], action) => {
//   switch (action.type) {
//     case 'LOAD_MOVIES': {
//       return action.payload.dataMovies;
//     }

//     default:
//       return state;
//   }
// };

const dataMovies = (state = initialState.data, action) => {
  switch (action.type) {
    case 'LOAD_MOVIES': {
      return action.payload.dataMovies;
    }

    case LIKE: {
      console.log(state);
      const newState = state.then(movies => {
        // console.info(state);
        return movies.map(movie => {
          if (movie.imdbID !== action.payload.id) {
            return movie;
          }
          return {
            ...movie,
            like: !movie.like,
            unlike: !movie.like ? false : movie.unlike
          };
        });
      });
      return newState;
    }
    case UNLIKE: {
      const newState = state.then(movies => {
        return movies.map(movie => {
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
      });
      return newState;
    }

    case SEARCH: {
      // if (!action.payload.value.length) {
      //   return state;
      // }
      // console.log(action.payload.dataMovies);
      return action.payload.dataMovies;
    }

    default:
      return state;
  }
};

// export default likes;
export { dataMovies, likesCount };
