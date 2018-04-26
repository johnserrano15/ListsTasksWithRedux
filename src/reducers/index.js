import post from './post';
import tasks from './tasks';
import search from './search';
import list from './list';
import listFilter from './listFilter';
import { dataMovies, likesCount } from './movies';
import isLoading from './loading';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  post,
  tasks,
  search,
  list,
  listFilter,
  dataMovies,
  likesCount,
  isLoading
});

export default rootReducer;
