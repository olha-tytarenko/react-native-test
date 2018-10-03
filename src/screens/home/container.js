import {connect} from 'react-redux';
import {HomeScreen} from './home';
import {fetchGithubUsers} from '../../actions/fetch-github-users';

const mapStateToProps = ({ users }) => ({
  users,
});

const mapDispatchToProps = {
  fetchGithubUsers,
};

export const HomeScreenContainer = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
