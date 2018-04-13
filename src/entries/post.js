import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Post from '../pages/containers/post';


const post = document.getElementById('post');
// const holaMundo = <h1>Hola mundo React :)</h1>;

// ReactDOM.render(<Media />, post);
render(<Post name="John Serrano :D" />, post);