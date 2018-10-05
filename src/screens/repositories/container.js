import {connect} from 'react-redux';
import {RepositoriesScreen} from './repositories';
import {cleanUserData} from '../../actions/clean-user-repositories';

const mapStateToProps = ({ currentUser, data, isDataLoaded }) => ({
	currentUser,
	data,
	isDataLoaded,
});

const mapDispatchToProps = {
	cleanUserData,
};

export const RepositoriesScreenContainer = connect(mapStateToProps, mapDispatchToProps)(RepositoriesScreen);
