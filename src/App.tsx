import React from 'react'
import './App.scss'
import { IApp } from './store/types/app'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import Routes from './routes'
import Wrappers from './hoc/Wrappers'

const App = ({ store, history }: IApp) => {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<Wrappers>
					<div className="App">
						<Routes />
					</div>
				</Wrappers>
			</ConnectedRouter>
		</Provider>
	)
}

export default App
