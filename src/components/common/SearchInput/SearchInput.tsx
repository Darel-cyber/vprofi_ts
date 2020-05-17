import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Paper, Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
	root: {
		borderRadius: '4px',
		alignItems: 'center',
		padding: theme.spacing(1),
		display: 'flex',
		width: '300px'
	},
	icon: {
		marginRight: theme.spacing(1),
		color: theme.palette.text.secondary
	},
	input: {
		flexGrow: 1,
		fontSize: '14px',
		lineHeight: '16px',
		letterSpacing: '-0.05px'
	}
}));

interface ISearchInput {
	placeholder: string;
	onChange: () => void;
}

const SearchInput = ({ placeholder, onChange }: ISearchInput) => {
	const classes = useStyles();

	return (
		<Paper className={classes.root}>
			<SearchIcon className={classes.icon} />
			<Input className={classes.input} disableUnderline onChange={onChange} placeholder={placeholder} />
		</Paper>
	);
};

export default SearchInput;
