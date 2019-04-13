const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
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
};

function postsPageReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST: {
      state.posts.push({
        postBy: {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMNrgrlhHs9bSC63sLecJsZ6S0QS2-iYJWMlQQFFhaU3vblOt',
          name: 'Misha',
        },
        text: action.text,
      });
      break;
    }
    case UPDATE_NEW_POST_TEXT: {
      state.newPostText = action.text;
      break;
    }
    default: {
      // console.log('wrong action type,' + action.type);
      break;
    }
  }
  return state;
}

export default postsPageReducer;

export const updateNewPostTextActionCreator = text => ({ type: UPDATE_NEW_POST_TEXT, text });
export const addPostTextActionCreator = text => ({ type: ADD_POST, text });
