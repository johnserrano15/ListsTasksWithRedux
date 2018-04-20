import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import reducer from '../reducers/tasks';
import reducer from '../reducers/index';

const store = createStore(
  reducer,
  {}, // initialState se controla en el reducer
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// console.log(store.getState());

const app = document.getElementById('app');
// const holaMundo = <h1>Hola mundo React :)</h1>;

// ReactDOM.render(<Media />, app);
render(
  <Provider store={store}>
    <Home name="John Serrano :D" />
  </Provider>,
  app
);
