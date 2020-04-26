import React, { forwardRef } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { colors, Theme } from '@material-ui/core';
import { NavLink as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import { IPages } from '../../../interfaces/IPages';

interface ISidebarNav {
	className: string;
	pages: IPages[];
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {},
	item: {
		display: 'flex',
		paddingTop: 0,
		paddingBottom: 0
	},
	button: {
		color: colors.blueGrey[800],
		padding: '10px 8px',
		justifyContent: 'flex-start',
		textTransform: 'none',
		letterSpacing: 0,
		width: '100%',
		fontWeight: theme.typography.fontWeightMedium
	},
	icon: {
		// color: theme.palette.icon,
		width: 24,
		height: 24,
		display: 'flex',
		alignItems: 'center',
		marginRight: theme.spacing(1)
	},
	active: {
		color: theme.palette.primary.main,
		fontWeight: theme.typography.fontWeightMedium,
		'& $icon': {
			color: theme.palette.primary.main
		}
	}
}));

const SidebarNav = ({ pages }: ISidebarNav) => {
	const classes = useStyles();
	return (
		<List className={classes.root}>
			{pages.map(page => (
				<ListItem className={classes.item} disableGutters key={page.title}>
					<Button
						className={classes.button}
						component={forwardRef<HTMLAnchorElement, Partial<RouterLinkProps>>(function MyButton(props, ref) {
							return (
								<div ref={ref as any} style={{ flexGrow: 1 }}>
									<RouterLink activeClassName={classes.active} to={page.href} {...props} />
								</div>
							);
						})}
						to={page.href}
					>
						<div className={classes.icon}>{page.icon}</div>
						{page.title}
					</Button>
				</ListItem>
			))}
		</List>
	);
};

export default SidebarNav;
