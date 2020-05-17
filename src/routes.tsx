import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFound';
import MainPage from './pages/MainPage/MainPage';
import AdministratorPage from './pages/AdministratorPage/AdministratorPage';
import Dashboard from './pages/AdministratorPage/components/Dashboard';
import Categories from './pages/AdministratorPage/components/Categories';
import Settings from './pages/AdministratorPage/components/Settings';
import UsersContainer from './pages/AdministratorPage/components/Users/UsersContainer';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/admin">
				<Redirect to={'/admin/dashboard'} />
			</Route>
			<Switch>
				<Route path="/" exact component={MainPage} />
				<Route path="/admin/dashboard" exact component={() => <AdministratorPage component={<Dashboard />} />} />
				<Route path="/admin/users" exact component={() => <AdministratorPage component={<UsersContainer />} />} />
				<Route path="/admin/categories" exact component={() => <AdministratorPage component={<Categories />} />} />
				<Route path="/admin/settings" exact component={() => <AdministratorPage component={<Settings />} />} />
				<Route path="/404" exact component={() => <NotFoundPage />} />
				<Redirect to="/404" />
			</Switch>
		</Switch>
	);
};

export default Routes;
