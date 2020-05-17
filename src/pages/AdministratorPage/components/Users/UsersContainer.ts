import { IApplicationState } from '../../../../store/reducers';
import { getUsers } from '../../../../store/actions/admin';
import { connect } from 'react-redux';
import Users from './Users';

const mapStateToProps = (state: IApplicationState) => ({
	users: state.admin.users,
	loader: state.admin.loader
});

const mapDispatchToProps = {
	getUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
