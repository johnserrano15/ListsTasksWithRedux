import post from './post';
import tasks from './tasks';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  post,
  tasks
});

export default rootReducer;
