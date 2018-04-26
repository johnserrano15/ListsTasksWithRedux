import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Movies from '../pages/containers/movies';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import reducer from '../reducers/tasks';
import reducer from '../reducers/index';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
// https://github.com/gaearon/redux-thunk -> sirve para aplicar acciones async
import { initialStateAsync } from '../actions/index';
import api from '../api/index';

const store = createStore(
  reducer,
  {}, // initialState se controla en el reducer
  composeWithDevTools(
    applyMiddleware(logger, ReduxThunk.withExtraArgument(api))
  )
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(initialStateAsync());

// console.log(store.getState());

const app = document.getElementById('movies');
// const holaMundo = <h1>Hola mundo React :)</h1>;

// ReactDOM.render(<Media />, app);
render(
  <Provider store={store}>
    <Movies name="John Serrano :D" />
  </Provider>,
  app
);
