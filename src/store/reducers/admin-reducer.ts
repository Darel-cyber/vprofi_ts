import { IAdminReducer } from '../types/admin';
import { ActionType, getType } from 'typesafe-actions';
import * as actions from '../actions/admin';

const initialState: IAdminReducer = {
	loader: false,
	users: []
};

export type AdminActions = ActionType<typeof actions>;

export default (state = initialState, action: AdminActions): IAdminReducer => {
	switch (action.type) {
		case getType(actions.setLoader): {
			return { ...state, loader: action.status };
		}
		case getType(actions.setUsers): {
			return { ...state, users: action.users };
		}
		default: {
			return { ...state };
		}
	}
};
