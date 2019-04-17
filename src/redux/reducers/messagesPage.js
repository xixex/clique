const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
  messages: [
    { sender: { name: 'Максим' }, text: 'Hello :)' },
    { sender: '', text: 'Hello hello' },
  ],
  newMessageText: '',
};

function messagesPage(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT: {
      return { ...state, newMessageText: action.text };
    }
    case SEND_MESSAGE: {
      return { ...state, messages: [...state.messages, action.message], newMessageText: '' };
    }
    default: {
      return state;
    }
  }
}

export default messagesPage;

export const updateNewMessageTextActionCreator = text => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text,
});
export const sendMessageActionCreator = text => ({ type: SEND_MESSAGE, message: { text } });
