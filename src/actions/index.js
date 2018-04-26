import { SEARCH, LIKE, UNLIKE } from './types';
import api from '../api/index';

export function addTodo(value) {
  return {
    type: 'ADD_TODO',
    payload: { id: Date.now(), text: value }
  };
}

export function toggleTodo(id) {
  return { type: 'TOGGLE_TODO', payload: { id } };
}

export function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    payload: { filter: filter }
  };
}

export const aggTask = value => {
  return { type: 'AGG_TASK', payload: { value } };
};

export const deleteTask = id => {
  return { type: 'DELETE_TASK', payload: { id } };
};

export const updateTask = (id, text) => {
  return { type: 'UPDATE_TASK', payload: { value: text, shouldHide: id } };
};

export const changetask = value => {
  return { type: 'CHANGE_TASK', payload: { value } };
};

export const submitUpdate = (id, text) => {
  return { type: 'SUBMIT_UPDATE', payload: { id, text } };
};

export const submitSearch = (query, items) => {
  return { type: 'SUBMIT_SEARCH', payload: { query, items } };
};

export const like = (id, like, unlike) => {
  return { type: LIKE, payload: { id, like, unlike } };
};

export const unlike = (id, unlike, like) => {
  return { type: UNLIKE, payload: { id, unlike, like } };
};

export const searchMovies = dataMovies => {
  console.log(dataMovies);
  return { type: SEARCH, payload: { dataMovies } };
};

// ReduxThunk
export const searchMoviesAsync = value => {
  return dispatch => {
    async function search(name) {
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
    }

    if (!value.length) {
      return null;
    }

    return search(value).then(data => dispatch(searchMovies(data)));
  };
};

export const initialState = dataMovies => {
  return { type: 'LOAD_MOVIES', payload: { dataMovies } };
};

export const initialStateAsync = () => {
  return dispatch => {
    const movies = async () => {
      try {
        const listMovies = await api.movies.getMovies();
        const dataMovies = [];
        // console.log(listMovies);
        listMovies.Search.map((movie, index) => {
          dataMovies[index] = { ...movie, like: false, unlike: false };
        });

        // console.log(dataMovies);
        return dataMovies;
      } catch (err) {
        console.log(`Algo salio mal ${err}`);
      }
    };

    return movies()
      .then(dataMovies => {
        dispatch(initialState(dataMovies));
      })
      .catch(error => {
        throw error;
      });
  };
};

/* export function searchAsyncVideo (query) {
 return (dispatch) => {
   //fetch(`http://miapi.com/buscar/${query}`).then((data)=>{
   // dispatch(searchVideo(data))
   // })
   setTimeout(() => {
     dispatch(searchVideo(query))
   }, 5000);
 }
} */
