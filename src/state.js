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
      {
        sender: {name: "Максим"},
        text: "How are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are you "
      },
      {text: "Hello hello"}
    ],
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
      case 'ADD-POST': {
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
      case 'UPDATE-NEW-POST-TEXT': {
        this._state.newPostText = action.text;
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


export default store;
