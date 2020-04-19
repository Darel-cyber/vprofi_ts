import { createAction, createCustomAction } from 'typesafe-actions';
import { IDirection, ISpecialization, ISpecialty } from '../types/rubric';
import { RubricTypes } from '../constants/rubric';

export const getDirections = createCustomAction(
	RubricTypes.GET_DIRECTIONS_SAGA,
	(id: number) => ({ id })
);

export const getSpecialties = createCustomAction(
	RubricTypes.GET_SPECIALTIES_SAGA,
	(directionId: number) => ({ directionId })
);

export const getSpecializations = createCustomAction(
	RubricTypes.GET_SPECIALIZATIONS_SAGA,
	(directionId: number, specialtyId: number) => ({
		directionId,
		specialtyId
	})
);

export const getRubricsSaga = createAction(RubricTypes.GET_RUBRICS_SAGA)();

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
