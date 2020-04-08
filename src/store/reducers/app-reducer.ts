import { IAppReducer } from '../types/app';
import * as actions from '../actions/app';
import { ActionType, getType } from 'typesafe-actions';

const initialState: IAppReducer = {
	initialized: false,
	message: ''
};

export type AppActions = ActionType<typeof actions>;

export default (state = initialState, action: AppActions): IAppReducer => {
	switch (action.type) {
		case getType(actions.setInitialized): {
			return { ...state, initialized: true };
		}

		case getType(actions.showMessage): {
			return { ...state, message: action.message };
		}

		case getType(actions.deleteMessage): {
			return { ...state, message: '' };
		}

		default: {
			return state;
		}
	}
};
