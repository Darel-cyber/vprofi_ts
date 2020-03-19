import AppReducer from './app-reducer'
import { IAppReducer } from '../types/app'
import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter, RouterState } from 'connected-react-router'

export interface IApplicationState {
	app: IAppReducer
	router: RouterState
}

export const createRootReducer = (history: History) =>
	combineReducers({
		app: AppReducer,
		router: connectRouter(history)
	})

/*
export function* rootSaga() {
	yield all([fork(companiesSaga), fork(stationsSaga)])
}*/
