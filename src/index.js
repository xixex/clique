import state from './state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {subscribe} from "./state";
import {addPost} from './state';

let renderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
};

renderEntireTree(state);
subscribe(renderEntireTree);