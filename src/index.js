import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import store from './redux/redux-store';


const renderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        store={store}
      />
    </BrowserRouter>,
    document.getElementById('root'),
  );
};

renderEntireTree(store.getState());
store.subscribe(() => {
  renderEntireTree(store.getState());
});
