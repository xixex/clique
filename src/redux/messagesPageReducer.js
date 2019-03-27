const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text: text
});
export const sendMessageActionCreator = (text) => ({type: SEND_MESSAGE, text: text});

function messagesPageReducer(state, action) {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT: {
      state.newMessageText = action.text;
      break;
    }
    case SEND_MESSAGE: {
      state.messages.push({text: action.text});
      state.newMessageText = '';
      break;
    }
    default: {
      break;
    }
  }
  return state;
}

export default messagesPageReducer;