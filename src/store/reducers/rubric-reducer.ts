import * as actions from '../actions/rubric';
import { ActionType, getType } from 'typesafe-actions';
import { IRubricReducer } from '../types/rubric';

const initialState: IRubricReducer = {
	directions: [],
	specialties: [],
	specializations: []
};

export type RubricActions = ActionType<typeof actions>;

export default (state = initialState, action: RubricActions): IRubricReducer => {
	switch (action.type) {
		case getType(actions.setDirections): {
			return { ...state, directions: action.directions };
		}

		case getType(actions.setSpecialties): {
			return { ...state, specialties: action.specialties };
		}

		case getType(actions.setSpecializations): {
			return { ...state, specializations: action.specializations };
		}

		default: {
			return state;
		}
	}
};
