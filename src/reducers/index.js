import post from './post';
import tasks from './tasks';
import search from './search';
import list from './list';
import listFilter from './listFilter';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  post,
  tasks,
  search,
  list,
  listFilter
});

export default rootReducer;
