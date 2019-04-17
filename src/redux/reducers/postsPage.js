const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
  posts: [
    {
      id: 1,
      postBy: {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMNrgrlhHs9bSC63sLecJsZ6S0QS2-iYJWMlQQFFhaU3vblOt',
        name: 'Misha',
      },
      text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, perferendis?',
    },
  ],
  newPostText: '',
};

function postsPage(state = initialState, action) {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, action.post],
        newPostText: '',
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.text };
    }
    default: {
      return state;
    }
  }
}

export default postsPage;

export const updateNewPostTextActionCreator = text => ({ type: UPDATE_NEW_POST_TEXT, text });
export const addPostTextActionCreator = text => ({
  type: ADD_POST,
  post: {
    postBy: {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMNrgrlhHs9bSC63sLecJsZ6S0QS2-iYJWMlQQFFhaU3vblOt',
      name: 'Misha',
    },
    text,
  },
});
