const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text});
export const addPostTextActionCreator = (text) => ({type: ADD_POST, text: text});


function postsPageReducer (state, action) {
  switch (action.type) {
    case ADD_POST: {
      state.posts.push({
        postBy: {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMNrgrlhHs9bSC63sLecJsZ6S0QS2-iYJWMlQQFFhaU3vblOt',
          name: 'Misha',
        },
        text: action.text
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