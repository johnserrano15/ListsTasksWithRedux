import post from './post';
import tasks from './tasks';
import search from './search';
import list from './list';
import listFilter from './listFilter';
import { dataMovies, likesCount } from './movies';
import isLoading from './loading';

// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';

/* const rootReducer = combineReducers({
  post,
  tasks,
  search,
  list,
  listFilter,
  dataMovies,
  likesCount,
  isLoading
}); */
const rootReducer = combineReducers({
  list,
  listFilter
});

export default rootReducer;
