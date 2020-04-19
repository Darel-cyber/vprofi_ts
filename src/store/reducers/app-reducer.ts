import { IAppReducer } from '../types/app';
import * as actions from '../actions/app';
import { ActionType, getType } from 'typesafe-actions';

const initialState: IAppReducer = {
	isInitialized: false,
	message: '',
	globalLoader: false
};

export type AppActions = ActionType<typeof actions>;

export default (state = initialState, action: AppActions): IAppReducer => {
	switch (action.type) {
		case getType(actions.setInitialized): {
			return { ...state, isInitialized: true };
		}

		case getType(actions.showMessage): {
			return { ...state, message: action.message };
		}

		case getType(actions.deleteMessage): {
			return { ...state, message: '' };
		}

		case getType(actions.setGlobalLoader): {
			return { ...state, globalLoader: action.status };
		}

		default: {
			return state;
		}
	}
};
