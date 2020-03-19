import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import configureStore from './store/configureStore'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

const initialState = window.INITIAL_REDUX_STATE

const store = configureStore(history, initialState)

ReactDOM.render(
	<App store={store} history={history} />,
	document.getElementById('root')
)

serviceWorker.unregister()
