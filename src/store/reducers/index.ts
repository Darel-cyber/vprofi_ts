import AppReducer from './reducers/app-reducer'
import { IAppReducer } from '../types/app'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export interface IApplicationState {
	app: IAppReducer
}

export const reducer = combineReducers({
	app: AppReducer,
	routing: routerReducer
})
/*
export function* rootSaga() {
	yield all([fork(companiesSaga), fork(stationsSaga)])
}*/
