import api from '../api/index';

const movies = async () => {
  const listMovies = await api.movies.getMovies();
  const dataMovies = [];
  listMovies.Search.map((movie, index) => {
    dataMovies[index] = {
      ...movie,
      like: false,
      unlike: false
    };
  });
  console.log(dataMovies);
  return dataMovies;
};
/* const listMovies = [];
for (let index = 0; index < 10; index++) {
  listMovies[index] = {
    like: false,
    unlike: false
  };
}

console.log(listMovies); */

const initialState = {
  likesCount: {
    likeCount: 0,
    unlikeCount: 0
  },
  data: movies()
};

const likesCount = (state = initialState.likesCount, action) => {
  switch (action.type) {
    case 'LIKE': {
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
    case 'UNLIKE': {
      const unlikes = {
        unlikeCount: !action.payload.unlike
          ? state.unlikeCount + 1
          : state.unlikeCount - 1,
        likeCount: action.payload.like ? state.likeCount - 1 : state.likeCount
      };
      return unlikes;
    }
    default:
      return state;
  }
};

const dataMovies = (state = initialState.data, action) => {
  switch (action.type) {
    case 'ADD': {
      return [...state, like(undefined, action)];
    }
    case 'LIKE': {
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
    case 'UNLIKE': {
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
    default:
      return state;
  }
};

const searchMovies = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH': {
      return state;
    }

    default:
      return state;
  }
};

// export default likes;
export { dataMovies, likesCount };
