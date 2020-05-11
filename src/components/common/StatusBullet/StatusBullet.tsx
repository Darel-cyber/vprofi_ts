import React from 'react';
import clsx from 'clsx';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'inline-block',
		borderRadius: '50%',
		flexGrow: 0,
		flexShrink: 0
	},
	sm: {
		height: theme.spacing(1),
		width: theme.spacing(1)
	},
	md: {
		height: theme.spacing(2),
		width: theme.spacing(2)
	},
	lg: {
		height: theme.spacing(3),
		width: theme.spacing(3)
	},
	primary: {
		backgroundColor: theme.palette.primary.main
	},
	info: {
		backgroundColor: theme.palette.info.main
	},
	warning: {
		backgroundColor: theme.palette.warning.main
	},
	danger: {
		backgroundColor: theme.palette.error.main
	},
	success: {
		backgroundColor: theme.palette.success.main
	}
}));

interface IStatusBullet {
	className: string;
	size: 'sm' | 'md' | 'lg';
	color: 'primary' | 'info' | 'success' | 'warning' | 'danger';
}

const StatusBullet = ({ className, size, color }: IStatusBullet) => {
	const classes = useStyles();

	return (
		<span
			className={clsx(
				{
					[classes.root]: true,
					[classes[size]]: size,
					[classes[color]]: color
				},
				className
			)}
		/>
	);
};

export default StatusBullet;
