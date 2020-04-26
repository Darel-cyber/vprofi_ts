import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';
import InputIcon from '@material-ui/icons/Input';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

interface ITopbar {
	onSidebarOpen: () => void;
}

const useStyles = makeStyles(theme => ({
	root: {
		boxShadow: 'none'
	},
	flexGrow: {
		flexGrow: 1
	},
	signOutButton: {
		marginLeft: theme.spacing(1)
	},
	title: {
		textDecoration: 'none',
		color: 'white'
	}
}));

const Topbar = ({ onSidebarOpen }: ITopbar) => {
	const classes = useStyles();

	const [notifications] = useState(['3141', '234234']);

	return (
		<AppBar className={clsx(classes.root)}>
			<Toolbar>
				<RouterLink className={classes.title} to="/">
					<Typography variant="h6" noWrap>
						Панель администратора
					</Typography>
				</RouterLink>
				<div className={classes.flexGrow} />
				<Hidden mdDown>
					<IconButton color="inherit">
						<Badge badgeContent={notifications.length} color="primary" variant="dot">
							<NotificationsIcon />
						</Badge>
					</IconButton>
					<IconButton className={classes.signOutButton} color="inherit">
						<InputIcon />
					</IconButton>
				</Hidden>
				<Hidden lgUp>
					<IconButton color="inherit" onClick={onSidebarOpen}>
						<MenuIcon />
					</IconButton>
				</Hidden>
			</Toolbar>
		</AppBar>
	);
};

export default Topbar;
