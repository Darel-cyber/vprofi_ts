import React from 'react';
import style from '../styles/itemsMenu.module.scss';
import { ISpecialization, ISpecialty } from '../../../store/types/rubric';

interface ICurrentSpecialities {
	specialities: ISpecialty[];
	specializations: ISpecialization[];
	selectSpeciality: (currentSpecialty: ISpecialty) => void;
}

const getCurrentSpecializations = (specializations: ISpecialization[], specialtyId: number, directionId: number) =>
	specializations.filter(
		(specialization: ISpecialization) =>
			specialization.specialty_id === specialtyId && specialization.direction_id === directionId
	);

const CurrentSpecialities = ({ specialities, specializations, selectSpeciality }: ICurrentSpecialities) => {
	const createSpecializationsContent = (
		currentSpecializations: ISpecialization[],
		currentSpecialty?: ISpecialty,
		isTooLong?: boolean
	) => (
		<>
			{currentSpecializations.map((specialization: ISpecialization, index: number) => (
				<a href="#" key={index} className={style.specialization}>
					{' '}
					{specialization.name}
				</a>
			))}
			{isTooLong && !!currentSpecialty && (
				<a href="#" className={style.specialization} onClick={() => selectSpeciality(currentSpecialty)}>
					{'Еще...'}
				</a>
			)}
		</>
	);

	const createSpecialitiesContent = (specialty: ISpecialty) => {
		const currentSpecializations = getCurrentSpecializations(specializations, specialty.id, specialty.direction_id);

		return currentSpecializations.length > 8 && !!specialty.name && specialty.haveChild
			? createSpecializationsContent(currentSpecializations.slice(0, 8), specialty, true)
			: createSpecializationsContent(currentSpecializations);
	};

	return (
		<>
			{specialities.map((specialty, index) => (
				<div className={`${style.specialty} ${style.specialty}`} key={index}>
					<div className={style.specialtyName}>
						<a href="#">{specialty.name}</a>
					</div>
					{!!specializations && specializations.length > 0 && (
						<div className={style.specializations}>{createSpecialitiesContent(specialty)}</div>
					)}
				</div>
			))}
		</>
	);
};

export default CurrentSpecialities;
