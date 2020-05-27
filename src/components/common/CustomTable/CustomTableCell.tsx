import React from 'react';
import StatusBullet from '../StatusBullet/StatusBullet';
import { Checkbox, TableCell } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import getInitials from '../../../utils/getInitials';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

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
	},
	nameContainer: {
		display: 'flex',
		alignItems: 'center'
	},
	avatar: {
		marginRight: theme.spacing(2)
	}
}));

interface ICustomTableCell {
	type: string;
	value: string | number;
	items?: any[];
	item?: any;
	selectedItems?: number[];
	handleSelectAll?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleSelectOne?: (event: any, id: number) => void;
}

interface IStatusColors {
	active: 'success';
	blocked: 'danger';
}

const statusColors: IStatusColors = {
	active: 'success',
	blocked: 'danger'
};

const CustomTableCell = ({
	type,
	value,
	items,
	item,
	selectedItems,
	handleSelectAll,
	handleSelectOne
}: ICustomTableCell) => {
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

		case type === 'isDeleted': {
			return (
				<TableCell>
					<div className={classes.statusContainer}>{value && <CheckCircleRoundedIcon />}</div>
				</TableCell>
			);
		}

		case type === 'isActive': {
			return (
				<TableCell>
					<div className={classes.statusContainer}>
						<StatusBullet
							className={classes.status}
							color={value ? statusColors.active : statusColors.blocked}
							size="sm"
						/>
						{value ? 'Активно' : 'Заблокировано'}
					</div>
				</TableCell>
			);
		}

		case type === 'checkboxAll': {
			if (selectedItems && items && handleSelectAll) {
				return (
					<TableCell padding="checkbox">
						<Checkbox
							checked={selectedItems.length === items.length}
							color="primary"
							indeterminate={selectedItems.length > 0 && selectedItems.length < items.length}
							onChange={handleSelectAll}
						/>
					</TableCell>
				);
			} else {
				return null;
			}
		}

		case type === 'checkbox': {
			if (selectedItems && item && handleSelectOne) {
				return (
					<TableCell padding="checkbox">
						<Checkbox
							checked={selectedItems.indexOf(item.id) !== -1}
							color="primary"
							onClick={event => handleSelectOne(event, item.id)}
							value="true"
						/>
					</TableCell>
				);
			} else {
				return null;
			}
		}

		case type === 'withAvatar': {
			return (
				<TableCell>
					<div className={classes.nameContainer}>
						<Avatar
className={classes.avatar} src={item.avatarUrl}
						>
							{getInitials(value.toString())}
						</Avatar>
						<Typography variant="body1">{value}</Typography>
					</div>
				</TableCell>
			);
		}

		case type === 'date': {
			return <TableCell>{value && new Date(value).toLocaleDateString()}</TableCell>;
		}

		default: {
			return <TableCell>{value}</TableCell>;
		}
	}
};

export default CustomTableCell;
