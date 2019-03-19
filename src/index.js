import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
  {
    postBy: {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMNrgrlhHs9bSC63sLecJsZ6S0QS2-iYJWMlQQFFhaU3vblOt',
      name: 'Misha'
    },
    text: 'Hello my friends:) Im fine!'
  },
  {
    postBy: {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQazb7jkkWezbOBw7uKRZ2sDY15KQy55Fq5p818eYeEg1MR2QfFxg',
      name: 'Вася'
    },
    text: 'Hello Misha))'
  }
];


let person = {name: 'Misha Sonstav', country: 'Belarus'};

let messages = [
  {sender: {name: "Максим"}, text: "Hello :)"},
  {sender: {name: "Максим"}, text: "How are you "},
  {sender: {name: "Максим"}, text: "How are you "},
  {sender: {name: "Максим"}, text: "How are you "},
  {
    sender: {name: "Максим"},
    text: "How are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are you "
  },
  {text: "Hello hello"}
];

ReactDOM.render(<App messages={messages} person={person}
                     posts={posts}/>, document.getElementById('root'));
