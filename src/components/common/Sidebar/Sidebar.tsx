import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Divider, Drawer, Theme } from '@material-ui/core';
import AccountAvatar, { IAccountAvatar } from '../AccountAvatar/AccountAvatar';
import { IPages } from '../../../interfaces/IPages';
import SidebarNav from '../SidebarNav/SidebarNav';

const useStyles = makeStyles((theme: Theme) => ({
	drawer: {
		width: 240,
		[theme.breakpoints.up('lg')]: {
			marginTop: 64,
			height: 'calc(100% - 64px)'
		}
	},
	root: {
		/*backgroundColor: theme.palette.white,*/
		backgroundColor: 'white',
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		padding: theme.spacing(2)
	},
	divider: {
		margin: theme.spacing(2, 0)
	},
	nav: {
		marginBottom: theme.spacing(2)
	}
}));

interface IAdminSidebar {
	open: boolean;
	variant: 'permanent' | 'persistent' | 'temporary';
	onClose: () => void;
	pages: IPages[];
	user: IAccountAvatar;
}

const Sidebar = ({ open, variant, onClose, pages, user }: IAdminSidebar) => {
	const classes = useStyles();

	return (
		<Drawer anchor="left" classes={{ paper: classes.drawer }} onClose={onClose} open={open} variant={variant}>
			<div className={classes.root}>
				<AccountAvatar name={user.name} avatarAddress={user.avatarAddress} bio={user.bio} />
				<Divider className={classes.divider} />
				<SidebarNav className={classes.nav} pages={pages} />
			</div>
		</Drawer>
	);
};

export default Sidebar;
