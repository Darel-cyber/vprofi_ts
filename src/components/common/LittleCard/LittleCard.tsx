import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		height: '100%'
	},
	content: {
		alignItems: 'center',
		display: 'flex'
	},
	title: {
		fontWeight: 700
	},
	avatar: {
		backgroundColor: theme.palette.success.main,
		height: 56,
		width: 56
	},
	difference: {
		marginTop: theme.spacing(2),
		display: 'flex',
		alignItems: 'center'
	},
	differenceValue: {
		color: theme.palette.success.dark,
		marginRight: theme.spacing(1)
	}
}));

interface ILittleCard {
	label: string;
	value: string;
	icon: JSX.Element;
	extraLabel?: string;
	extraValue?: string;
	extraIcon?: JSX.Element;
}

const LittleCard = ({ label, value, icon, extraLabel, extraValue, extraIcon }: ILittleCard) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardContent>
				<Grid container justify="space-between">
					<Grid item>
						<Typography className={classes.title} color="textSecondary" gutterBottom variant="body2">
							{label}
						</Typography>
						<Typography variant="h3">{value}</Typography>
					</Grid>
					<Grid item>
						<Avatar className={classes.avatar}>{icon}</Avatar>
					</Grid>
				</Grid>
				<div className={classes.difference}>
					{extraIcon && extraIcon}
					{extraValue && (
						<Typography className={classes.differenceValue} variant="body2">
							{extraValue}
						</Typography>
					)}
					{extraLabel && (
						<Typography className={classes.differenceValue} variant="caption">
							{extraLabel}
						</Typography>
					)}
				</div>
			</CardContent>
		</Card>
	);
};

export default LittleCard;
