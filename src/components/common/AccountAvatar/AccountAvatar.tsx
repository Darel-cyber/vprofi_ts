import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Avatar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		minHeight: 'fit-content'
	},
	avatar: {
		width: 60,
		height: 60
	},
	name: {
		marginTop: theme.spacing(1),
		textAlign: 'center'
	}
}));

export interface IAccountAvatar {
	name: string;
	avatarAddress: string;
	bio: string;
}

const AccountAvatar = ({ name, avatarAddress, bio }: IAccountAvatar) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Avatar alt="Person" className={classes.avatar} component={RouterLink} src={avatarAddress} to="/settings" />
			<Typography className={classes.name} variant="h4">
				{name}
			</Typography>
			<Typography variant="body2">{bio}</Typography>
		</div>
	);
};

export default AccountAvatar;
