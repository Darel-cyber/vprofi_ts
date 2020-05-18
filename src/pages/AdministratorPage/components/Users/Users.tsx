import React, { useEffect, useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import UsersToolbar from './children/UsersToolbar';
import { ICurrentUser, IUsers } from './IUsers';
import UsersTable from './children/UsersTable';
import { CircularProgress } from '@material-ui/core';
import MaterialModal from '../../../../components/common/MaterialModal/MaterialModal';
import Ads from '../Ads/Ads';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3),
		position: 'relative',
		height: '100%',
		width: '100%'
	},
	content: {
		marginTop: theme.spacing(2)
	},
	loader: {
		position: 'absolute',
		height: '100%',
		width: '100%',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		zIndex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
}));

const Users = ({ users, usersLoader, getUsers, getAdsSaga, adsLoader, ads }: IUsers) => {
	const [showUsersAd, setShowUsersAd] = useState(false);

	const classes = useStyles();

	const [currentUser, setCurrentUser] = useState<ICurrentUser>({ id: -1, name: '' });

	useEffect(() => {
		getUsers();
	}, []);

	const usersAd = () => {
		setShowUsersAd(true);
	};

	return (
		<div className={classes.root}>
			{usersLoader && (
				<div className={classes.loader}>
					<CircularProgress color="inherit" />
				</div>
			)}
			<UsersToolbar />
			<div className={classes.content}>
				<UsersTable showAd={usersAd} users={users} setCurrentUser={setCurrentUser} />
			</div>
			<MaterialModal isOpen={showUsersAd} setIsModalOpen={setShowUsersAd}>
				<Ads user={currentUser} getAdsSaga={getAdsSaga} loader={adsLoader} ads={ads} />
			</MaterialModal>
		</div>
	);
};

export default Users;
