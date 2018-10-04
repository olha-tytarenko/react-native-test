import {connect} from 'react-redux';
import {HomeScreen} from './home';
import {fetchGithubUsers} from '../../actions/fetch-github-users';
import {setCurrentUser} from '../../actions/set-current-user';
import {fetchUserRepositories} from '../../actions/fetch-user-repositories';

const mapStateToProps = ({ users }) => ({
  users,
});

const mapDispatchToProps = {
  fetchGithubUsers,
  setCurrentUser,
  fetchUserRepositories,
};

export const HomeScreenContainer = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
