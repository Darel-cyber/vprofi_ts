import { createCustomAction } from 'typesafe-actions';
import { IDirection, ISpecialization, ISpecialty } from '../types/rubric';
import { RubricTypes } from '../constants/rubric';

export const setDirections = createCustomAction(
	RubricTypes.SET_DIRECTIONS,
	(directions: IDirection[]) => ({ directions })
);

export const setSpecialties = createCustomAction(
	RubricTypes.SET_SPECIALTIES,
	(specialties: ISpecialty[]) => ({ specialties })
);

export const setSpecializations = createCustomAction(
	RubricTypes.SET_SPECIALIZATIONS,
	(specializations: ISpecialization[]) => ({ specializations })
);
