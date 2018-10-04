import {connect} from 'react-redux';
import {RepositoriesScreen} from './repositories';
import {fetchUserRepositories} from '../../actions/fetch-user-repositories';
import {cleanUserRepositories} from '../../actions/clean-user-repositories';

const mapStateToProps = ({ currentUser, repositories }) => ({
	currentUser,
	repositories,
});

const mapDispatchToProps = {
	fetchUserRepositories,
	cleanUserRepositories,
};

export const RepositoriesScreenContainer = connect(mapStateToProps, mapDispatchToProps)(RepositoriesScreen);
