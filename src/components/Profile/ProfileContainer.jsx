import { connect } from 'react-redux';
import Profile from './Profile';

const mapStateToProps = state => ({
  person: state.profilePage.person,
});

const ProfileContainer = connect(mapStateToProps)(Profile);
export default ProfileContainer;
