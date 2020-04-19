import React, { useState } from 'react';
import { createStyles, Grid, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { IDirection, ISpecialization, ISpecialty } from '../../../store/types/rubric';
import SelectedSpeciality from './SelectedSpeciality';
import MaterialLink from '@material-ui/core/Link';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CurrentSpecialities from './CurrentSpecialities';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1
		},
		paper: {
			padding: theme.spacing(0),
			//textAlign: 'center',
			color: theme.palette.text.secondary
		},
		innerPaper: {
			display: 'flex',
			flexFlow: 'row wrap'
		},
		link: {
			display: 'flex',
			justifyContent: 'center',
			fontSize: '1.2rem',
			alignItems: 'center'
		},
		icon: {
			marginRight: theme.spacing(0.5),
			width: 20,
			height: 20,
			cursor: 'pointer',
			'&:hover': {
				color: 'red'
			}
		}
	})
);

interface IRightSide {
	direction: IDirection;
	specialties: ISpecialty[];
	specializations: ISpecialization[];
}

interface IDetailedView {
	direction?: IDirection;
	specialty?: ISpecialty;
}

const RightSide = ({ direction, specialties, specializations }: IRightSide) => {
	const classes = useStyles();
	const [fullViewFlag, setFullViewFlag] = useState<boolean>(false);
	const [detailedViewData, setDetailedViewData] = useState<IDetailedView>({ direction });

	const selectSpeciality = (specialty: ISpecialty) => {
		setFullViewFlag(true);
		setDetailedViewData({ ...detailedViewData, specialty });
	};

	return (
		<Grid container spacing={0} direction="column">
			{!!detailedViewData.direction && (
				<Paper elevation={0}>
					{fullViewFlag ? (
						<Breadcrumbs aria-label="breadcrumb">
							<MaterialLink color="inherit" onClick={() => setFullViewFlag(false)} className={classes.link}>
								<ArrowBackIcon className={classes.icon} />
							</MaterialLink>
							<Typography color="textPrimary" className={classes.link}>
								{!!detailedViewData.specialty && detailedViewData.specialty.name}
							</Typography>
						</Breadcrumbs>
					) : (
						<Breadcrumbs aria-label="breadcrumb">
							<Typography color="textPrimary" className={classes.link}>
								{detailedViewData.direction.name}
							</Typography>
						</Breadcrumbs>
					)}
				</Paper>
			)}
			<Grid item>
				{fullViewFlag && detailedViewData.specialty ? (
					<Paper elevation={0} className={classes.paper}>
						<SelectedSpeciality selectedSpeciality={detailedViewData.specialty} specializations={specializations} />
					</Paper>
				) : (
					<Paper elevation={0} className={classes.innerPaper}>
						<CurrentSpecialities
							specialities={specialties.filter((speciality: ISpecialty) => speciality.direction_id === direction.id)}
							specializations={specializations}
							selectSpeciality={selectSpeciality}
						/>
					</Paper>
				)}
			</Grid>
		</Grid>
	);
};

export default RightSide;
