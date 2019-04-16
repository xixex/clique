import { connect } from 'react-redux';
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/reducers/messagesPageReducer';
import Messages from './Messages';


const mapStateToProps = state => ({
  messagesPage: state.messagesPage,
});

const mapDispatchToProps = dispatch => ({
  onSendButtonClick: (newMessageText) => {
    dispatch(sendMessageActionCreator(newMessageText));
  },
  onMessageUpdate: (newMessageText) => {
    dispatch(updateNewMessageTextActionCreator(newMessageText));
  },

});
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
