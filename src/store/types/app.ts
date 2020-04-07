import { Store } from 'redux'
import { History } from 'history'
import { IApplicationState } from '../reducers'

export interface IApp {
	store: Store<IApplicationState>
	history: History
	// persistor: Persistor
}

export type IAppReducer = Readonly<{
	initialized: boolean
	message: string
}>
