import { IApplicationState } from '../../../../store/reducers';
import { getAdsSaga, getUsersSaga } from '../../../../store/actions/admin';
import { connect } from 'react-redux';
import Users from './Users';

const mapStateToProps = (state: IApplicationState) => ({
	users: state.admin.users,
	usersLoader: state.admin.usersLoader,
	adsLoader: state.admin.adsLoader,
	ads: state.admin.ads
});

const mapDispatchToProps = {
	getUsers: getUsersSaga,
	getAdsSaga: getAdsSaga
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
