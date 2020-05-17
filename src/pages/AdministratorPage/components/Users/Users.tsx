import React, { useEffect } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import UsersToolbar from './children/UsersToolbar';
import { IUsers } from './IUsers';
import UsersTable from './children/UsersTable';
import { CircularProgress } from '@material-ui/core';

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

const Users = ({ users, loader, getUsers }: IUsers) => {
	const classes = useStyles();

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div className={classes.root}>
			{loader && (
				<div className={classes.loader}>
					<CircularProgress color="inherit" />
				</div>
			)}
			<UsersToolbar />
			<div className={classes.content}>
				<UsersTable users={users} />
			</div>
		</div>
	);
};

export default Users;
