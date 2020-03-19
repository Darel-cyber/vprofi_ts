import { Action } from 'typesafe-actions'
import { AppTypes } from '../constants/app'
import { IAppReducer } from '../types/app'
import { Reducer } from 'redux'

const initialState: IAppReducer = {
	initialized: false,
	message: ''
}

const reducer: Reducer<IAppReducer> = (state = initialState, action) => {
	switch (action.type) {
		case AppTypes.INITIALIZED_SUCCESS: {
			return { ...state, initialized: true }
		}
		case AppTypes.SHOW_MESSAGE: {
			return { ...state, message: action.payload }
		}
		case AppTypes.DELETE_MESSAGE: {
			return { ...state, message: '' }
		}
		default: {
			return state
		}
	}
}

export default reducer
