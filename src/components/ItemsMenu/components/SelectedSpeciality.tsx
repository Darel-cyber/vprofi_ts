import React from 'react';
import { ISpecialization, ISpecialty } from '../../../store/types/rubric';
import style from '../styles/itemsMenu.module.scss';
import Paper from '@material-ui/core/Paper';

interface ISelectedSpeciality {
	selectedSpeciality: ISpecialty;
	specializations: ISpecialization[];
}

const SelectedSpeciality = ({ selectedSpeciality, specializations }: ISelectedSpeciality) => {
	const currentSpecializations = specializations.filter(
		(specialization: ISpecialization) =>
			specialization.direction_id === selectedSpeciality.direction_id &&
			specialization.specialty_id === selectedSpeciality.id
	);

	return (
		<div style={{ margin: '2%' }} className={style.allSpecializations}>
			{currentSpecializations.map((specialization: ISpecialization, key: number) => (
				<Paper elevation={0} key={key}>
					<a href="#" className={style.specialization}>
						{specialization.name}
					</a>
				</Paper>
			))}
		</div>
	);
};

export default SelectedSpeciality;
