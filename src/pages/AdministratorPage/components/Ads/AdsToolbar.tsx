import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Button, Typography } from '@material-ui/core';
import SearchInput from '../../../../components/common/SearchInput/SearchInput';
import styles from './ads.module.scss';

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

interface IAdsToolbar {
	label: string;
}

const AdsToolbar = ({ label }: IAdsToolbar) => {
	const classes = useStyles();

	return (
		<div className={styles.toolbar}>
			<Typography variant="h5">{label}</Typography>
			<div className={classes.root}>
				<div className={styles.buttons}>
					<Button color="primary" variant="contained" size="small" disabled>
						Добавить
					</Button>
					<Button color="secondary" variant="contained" size="small" disabled>
						Удалить
					</Button>
				</div>
				<div className={classes.row}>
					<SearchInput placeholder="Введите id объявления" onChange={() => console.log('change')} />
				</div>
			</div>
		</div>
	);
};

export default AdsToolbar;
