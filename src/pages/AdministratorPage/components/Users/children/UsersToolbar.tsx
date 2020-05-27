import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Button } from '@material-ui/core';
import SearchInput from '../../../../../components/common/SearchInput/SearchInput';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	row: {
		height: '42px',
		display: 'flex',
		alignItems: 'center',
		marginTop: theme.spacing(1)
	},
	spacer: {
		flexGrow: 1
	},
	importButton: {
		marginRight: theme.spacing(1)
	},
	exportButton: {
		marginRight: theme.spacing(1)
	},
	searchInput: {
		marginRight: theme.spacing(1)
	}
}));

interface IUsersToolbar {
	count: number[];
}

const UsersToolbar = ({ count }: IUsersToolbar) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.row}>
				<span className={classes.spacer} />
				<div style={{ width: '240px' }}>Выделено пользователей {count.length}</div>
				<Button className={classes.importButton} disabled>
					Import
				</Button>
				<Button className={classes.exportButton} disabled>
					Export
				</Button>
				<Button color="primary" variant="contained">
					Добавить пользователя
				</Button>
			</div>
			<div className={classes.row}>
				<SearchInput placeholder="Введите имя пользователя или id" onChange={() => console.log('change')} />
			</div>
		</div>
	);
};

export default UsersToolbar;
