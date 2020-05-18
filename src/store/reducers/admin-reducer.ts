import { IAdminReducer } from '../types/admin';
import { ActionType, getType } from 'typesafe-actions';
import * as actions from '../actions/admin';

const initialState: IAdminReducer = {
	usersLoader: false,
	adsLoader: false,
	users: [],
	ads: []
};

export type AdminActions = ActionType<typeof actions>;

export default (state = initialState, action: AdminActions): IAdminReducer => {
	switch (action.type) {
		case getType(actions.setUsersLoader): {
			return { ...state, usersLoader: action.status };
		}
		case getType(actions.setAdsLoader): {
			return { ...state, adsLoader: action.status };
		}
		case getType(actions.setUsers): {
			return { ...state, users: action.users };
		}
		case getType(actions.setAds): {
			return { ...state, ads: action.ads };
		}
		default: {
			return { ...state };
		}
	}
};
