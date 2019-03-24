const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
  _state: {
    posts: [
      {
        postBy: {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMNrgrlhHs9bSC63sLecJsZ6S0QS2-iYJWMlQQFFhaU3vblOt',
          name: 'Misha'
        },
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, perferendis?'
      }, {
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
    ],
    person: {id: 1, name: 'Misha Sonstav', country: 'Belarus'},
    messages: [
      {sender: {name: "Максим"}, text: "Hello :)"},
      {sender: {name: "Максим"}, text: "How are you "},
      {sender: {name: "Максим"}, text: "How are you "},
      {sender: {name: "Максим"}, text: "How are you "},
      {sender: {name: "Максим"}, text: "How are you "},
      {sender: {name: "Максим"}, text: "How are you "},
      {sender: {name: "Максим"}, text: "How are you "},
      {sender: {name: "Максим"}, text: "How are you "},
      {
        sender: {name: "Максим"},
        text: "How are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are you "
      },
      {text: "Hello hello"}
    ],
    newPostText: "",
    newMessageText: ""
  },

  _callObserver() {
    console.log('state was changed');
  },
  subscribe(observer) {
    this._callObserver = observer;
  },

  getState() {
    return this._state;
  },
  dispatch(action) {
    switch (action.type) {
      case ADD_POST: {
        this._state.posts.push({
          postBy: {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMNrgrlhHs9bSC63sLecJsZ6S0QS2-iYJWMlQQFFhaU3vblOt',
            name: 'Misha',
          },
          text: action.text
        });
        this._callObserver(this._state);
        break;
      }
      case UPDATE_NEW_POST_TEXT: {
        this._state.newPostText = action.text;
        this._callObserver(this._state);
        break;
      }
      case UPDATE_NEW_MESSAGE_TEXT: {
        this._state.newMessageText = action.text;
        this._callObserver(this._state);
        break;
      }
      case SEND_MESSAGE: {
        this._state.messages.push({text: action.text});
        this._state.newMessageText = '';
        this._callObserver(this._state);
        break;
      }
      default: {
        console.log('wrong action type, ' + action.type);
        break;
      }
    }
  }
};


export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text});
export const addPostTextActionCreator = (text) => ({type: ADD_POST, text: text});
export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text: text
});
export const sendMessageActionCreator = (text) => ({type: SEND_MESSAGE, text: text});

export default store;
