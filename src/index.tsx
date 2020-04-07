import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Wrappers from './hoc/Wrappers';

const history = createBrowserHistory();

const initialState = window.INITIAL_REDUX_STATE;

const store = configureStore(history, initialState);

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Wrappers>
				<App />
			</Wrappers>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
