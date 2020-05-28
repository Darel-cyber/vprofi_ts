import React, { useState } from 'react';
import style from './сategories.module.scss';
import { Card, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Slide from '@material-ui/core/Slide';
import { IDirection, ISpecialization, ISpecialty } from '../../../../store/types/rubric';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import EditIcon from '@material-ui/icons/Edit';

interface ICategories {
	directions: IDirection[];
	specialties: ISpecialty[];
	specializations: ISpecialization[];
	globalLoader: boolean;
}

interface ICurrentIds {
	directionId?: number;
	specialtyId?: number;
	specializationId?: number;
}

interface ICardHeader {
	title: string;
}

const CardHeader = ({ title }: ICardHeader) => (
	<div className={style.root__header}>
		<Typography variant="h4" component="h4">
			{title}
		</Typography>
		<div className={style.buttonsGroup}>
			<Tooltip title="Редактировать" aria-label="edit">
				<IconButton>
					<EditIcon />
				</IconButton>
			</Tooltip>
			<Tooltip title="Удалить" aria-label="delete">
				<IconButton>
					<DeleteIcon />
				</IconButton>
			</Tooltip>
			<Tooltip title="Добавить" aria-label="add">
				<IconButton>
					<AddIcon />
				</IconButton>
			</Tooltip>
		</div>
	</div>
);

const Categories = ({ directions, specialties, specializations, globalLoader }: ICategories) => {
	const [localSpecialities, setLocalSpecialities] = useState<ISpecialty[]>([]);
	const [localSpecializations, setLocalSpecializations] = useState<ISpecialization[]>([]);
	const [currentIds, setCurrentIds] = useState<ICurrentIds>({});

	console.log(currentIds);

	return (
		<Grid container spacing={3} className={style.root}>
			<Grid item xs={12} sm={12} md={12} lg={12} xl={4}>
				<Slide direction={'right'} in={directions.length > 0} mountOnEnter unmountOnExit>
					<Card>
						<CardHeader title="Категории" />
						<PerfectScrollbar>
							<div className={style.root__content}>
								<List component="nav" aria-label="secondary mailbox folders">
									{directions.map((direction: IDirection, key: number) => (
										<ListItem
											key={key}
											button
											selected={currentIds.directionId === direction.id}
											onClick={() => {
												if (currentIds.directionId === direction.id) {
													setCurrentIds({});
													setLocalSpecialities([]);
													setLocalSpecializations([]);
												} else {
													setCurrentIds({ directionId: direction.id });
													setLocalSpecialities(
														specialties.filter((speciality: ISpecialty) => speciality.direction_id === direction.id)
													);
												}
											}}
										>
											<ListItemText primary={direction.name} />
										</ListItem>
									))}
								</List>
							</div>
						</PerfectScrollbar>
					</Card>
				</Slide>
			</Grid>
			<Grid item xs={12} sm={12} md={12} lg={12} xl={4}>
				<Slide direction={'left'} in={localSpecialities.length > 0} mountOnEnter unmountOnExit>
					<Card>
						<CardHeader title="Специальности" />
						<PerfectScrollbar>
							<div className={style.root__content}>
								<List component="nav" aria-label="secondary mailbox folders">
									{localSpecialities.map((speciality: ISpecialty, key: number) => (
										<ListItem
											button
											key={key}
											onClick={() => {
												if (currentIds.specialtyId === speciality.id) {
													setCurrentIds({ ...currentIds, specialtyId: undefined });
													setLocalSpecializations([]);
												} else {
													setCurrentIds({ ...currentIds, specialtyId: speciality.id });
													setLocalSpecializations(
														specializations.filter((specialization: ISpecialization) => {
															return (
																specialization.direction_id === currentIds.directionId &&
																specialization.specialty_id === speciality.id
															);
														})
													);
												}
											}}
											selected={currentIds.specialtyId === speciality.id}
										>
											<ListItemText primary={speciality.name} />
										</ListItem>
									))}
								</List>
							</div>
						</PerfectScrollbar>
					</Card>
				</Slide>
			</Grid>
			<Grid item xs={12} sm={12} md={12} lg={12} xl={4}>
				<Slide
					direction={'left'}
					in={localSpecializations.length > 0 && localSpecialities.length > 0}
					mountOnEnter
					unmountOnExit
				>
					<Card>
						<CardHeader title="Специализации" />
						<PerfectScrollbar>
							<div className={style.root__content}>
								<List component="nav" aria-label="secondary mailbox folders">
									{localSpecializations.map((specialization: ISpecialization, key: number) => (
										<ListItem
											button
											key={key}
											onClick={() => {
												if (currentIds.specializationId === specialization.id) {
													setCurrentIds({ ...currentIds, specializationId: undefined });
												} else {
													setCurrentIds({ ...currentIds, specializationId: specialization.id });
												}
											}}
											selected={currentIds.specializationId === specialization.id}
										>
											<ListItemText primary={specialization.name} />
										</ListItem>
									))}
								</List>
							</div>
						</PerfectScrollbar>
					</Card>
				</Slide>
			</Grid>
		</Grid>
	);
};

export default Categories;
