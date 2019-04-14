/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/store';


const renderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App
          state={state}
          store={store}
        />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root'),
  );
};

renderEntireTree(store.getState());
store.subscribe(() => {
  renderEntireTree(store.getState());
});
