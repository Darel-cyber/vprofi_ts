import React, { ReactNode, useEffect, useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useMediaQuery } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import Sidebar from '../../components/common/Sidebar/Sidebar';
import clsx from 'clsx';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import CategoryIcon from '@material-ui/icons/Category';
import SettingsIcon from '@material-ui/icons/Settings';
import { IPages } from '../../interfaces/IPages.d';
import Topbar from './components/Topbar';
import { setPublicHeaderVisible, showMessage } from '../../store/actions/app';
import { connect } from 'react-redux';

interface IAdministratorPage {
	component: ReactNode;
	showMessage: (message: string) => void;
	setPublicHeaderVisible: (isVisible: boolean) => void;

}

const useStyles = makeStyles(theme => ({
	root: {
		paddingTop: 56,
		height: '100%',
		[theme.breakpoints.up('sm')]: {
			paddingTop: 64
		}
	},
	shiftContent: {
		paddingLeft: 240
	},
	content: {
		height: '100%'
	}
}));

const pages: IPages[] = [
	{
		title: 'Доска',
		href: '/admin/dashboard',
		icon: <DashboardIcon />
	},
	{
		title: 'Пользователи',
		href: '/admin/users',
		icon: <PeopleIcon />
	},
	{
		title: 'Категории',
		href: '/admin/categories',
		icon: <CategoryIcon />
	},
	{
		title: 'Настройки',
		href: '/admin/settings',
		icon: <SettingsIcon />
	}
];
// потом это будет приходить с бека
const user = {
	name: 'Келигов Сулумбек',
	avatarAddress: '/images/avatars/avatar.png',
	bio: 'Директор проекта'
};

const AdministratorPage = ({ component, showMessage, setPublicHeaderVisible }: IAdministratorPage) => {
	const classes = useStyles();
	useEffect(() => {
		console.log('rerender');
	}, []);

	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
		defaultMatches: true
	});

	const [openSidebar, setOpenSidebar] = useState(false);

	const handleSidebarOpen = () => {
		setOpenSidebar(true);
	};

	const handleSidebarClose = () => {
		setOpenSidebar(false);
	};

	const shouldOpenSidebar = isDesktop ? true : openSidebar;

	return (
		<div
			className={clsx({
				[classes.root]: true,
				[classes.shiftContent]: isDesktop
			})}
		>
			<Topbar onSidebarOpen={handleSidebarOpen} />
			<Sidebar
				onClose={handleSidebarClose}
				open={shouldOpenSidebar}
				variant={isDesktop ? 'persistent' : 'temporary'}
				pages={pages}
				user={user}
			/>
			<main className={classes.content}>{component}</main>
		</div>
	);
};

const mapStateToProps = null;

const mapDispatchToProps = {
	showMessage,
	setPublicHeaderVisible
};

export default connect(mapStateToProps, mapDispatchToProps)(AdministratorPage);
