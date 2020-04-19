import AppReducer from './app-reducer';
import RubricReducer from './rubric-reducer';
import { IAppReducer } from '../types/app';
import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter, RouterState } from 'connected-react-router';
import { IRubricReducer } from '../types/rubric';
import { all, fork } from 'redux-saga/effects';
import rubricSagas from '../sagas/rubricSagas';

export interface IApplicationState {
	app: IAppReducer;
	router: RouterState;
	rubric: IRubricReducer;
}

export const createRootReducer = (history: History) =>
	combineReducers({
		app: AppReducer,
		rubric: RubricReducer,
		router: connectRouter(history)
	});

export function* rootSaga() {
	yield all([fork(rubricSagas)]);
}
