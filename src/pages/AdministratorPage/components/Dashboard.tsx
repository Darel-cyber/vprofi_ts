import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Grid } from '@material-ui/core';
import LittleCard from '../../../components/common/LittleCard/LittleCard';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(4)
	},
	differenceIcon: {
		color: theme.palette.success.dark
	},
	icon: {
		height: 32,
		width: 32
	}
}));

const Dashboard = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={4}>
				<Grid item lg={3} sm={6} xl={3} xs={12}>
					<LittleCard
						label={'TOTAL USERS'}
						value={'1,600'}
						icon={<PeopleIcon className={classes.icon} />}
						extraLabel={'Since last month'}
						extraValue={'16%'}
						extraIcon={<ArrowUpwardIcon className={classes.differenceIcon} />}
					/>
				</Grid>
				<Grid item lg={3} sm={6} xl={3} xs={12}>
					<LittleCard label={'TOTAL PROFIT'} value={'$23,200'} icon={<AttachMoneyIcon className={classes.icon} />} />
				</Grid>
			</Grid>
		</div>
	);
};

export default Dashboard;
