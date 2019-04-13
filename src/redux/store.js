import messagesPageReducer from './messagesPageReducer';
import postsPageReducer from './postsPageReducer';

const store = {
  _state: {
    messagesPage: {
      messages: [
        { sender: { name: 'Максим' }, text: 'Hello :)' },
        { sender: { name: 'Максим' }, text: 'How are you ' },
        { sender: { name: 'Максим' }, text: 'How are you ' },
        { sender: { name: 'Максим' }, text: 'How are you ' },
        { sender: { name: 'Максим' }, text: 'How are you ' },
        { sender: { name: 'Максим' }, text: 'How are you ' },
        { sender: { name: 'Максим' }, text: 'How are you ' },
        { sender: { name: 'Максим' }, text: 'How are you ' },
        {
          sender: { name: 'Максим' },
          text: 'How are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are you ',
        },
        { text: 'Hello hello' },
      ],
      newMessageText: '',
    },
    postsPage: {
      posts: [
        {
          postBy: {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMNrgrlhHs9bSC63sLecJsZ6S0QS2-iYJWMlQQFFhaU3vblOt',
            name: 'Misha',
          },
          text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, perferendis?',
        }, {
          postBy: {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMNrgrlhHs9bSC63sLecJsZ6S0QS2-iYJWMlQQFFhaU3vblOt',
            name: 'Misha',
          },
          text: 'Hello my friends:) Im fine!',
        },
        {
          postBy: {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQazb7jkkWezbOBw7uKRZ2sDY15KQy55Fq5p818eYeEg1MR2QfFxg',
            name: 'Вася',
          },
          text: 'Hello Misha))',
        },
      ],
      newPostText: '',
    },
    profilePage: {
      person: { id: 1, name: 'Misha Sonstav', country: 'Belarus' },
    },
  },
  getState() {
    return this._state;
  },

  _callObserver() {
    console.log('state was changed');
  },
  subscribe(observer) {
    this._callObserver = observer;
  },

  dispatch(action) {
    messagesPageReducer(this._state.messagesPage, action);
    postsPageReducer(this._state.postsPage, action);
    this._callObserver(this._state);
  },
};

// TODO REFACTOR!!!


export default store;
