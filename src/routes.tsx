import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFound';
import MainPage from './pages/MainPage/MainPage';

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={() => <MainPage />} />
			<Route path="/404" exact component={() => <NotFoundPage />} />
			<Redirect to="/404" />
		</Switch>
	);
};

export default Routes;
