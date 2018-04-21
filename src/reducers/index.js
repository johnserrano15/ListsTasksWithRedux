import post from './post';
import tasks from './tasks';
import search from './search';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  post,
  tasks,
  search
});

export default rootReducer;
