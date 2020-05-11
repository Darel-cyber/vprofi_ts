import React from 'react';
import StatusBullet from '../StatusBullet/StatusBullet';
import { TableCell } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
	root: {},
	content: {
		padding: 0
	},
	inner: {
		minWidth: 500
	},
	statusContainer: {
		display: 'flex',
		alignItems: 'center'
	},
	status: {
		marginRight: theme.spacing(1)
	},
	actions: {
		justifyContent: 'flex-end'
	}
}));

interface ICustomTableCell {
	type: string;
	value: string;
}

interface IStatusColors {
	active: 'success';
	blocked: 'danger';
}

const statusColors: IStatusColors = {
	active: 'success',
	blocked: 'danger'
};

const CustomTableCell = ({ type, value }: ICustomTableCell) => {
	const classes = useStyles();

	switch (true) {
		case type === 'status': {
			return (
				<TableCell>
					<div className={classes.statusContainer}>
						<StatusBullet
							className={classes.status}
							color={value === 'active' ? statusColors.active : statusColors.blocked}
							size="sm"
						/>
						{value}
					</div>
				</TableCell>
			);
		}

		default: {
			return <TableCell>{value}</TableCell>;
		}
	}
};

export default CustomTableCell;
