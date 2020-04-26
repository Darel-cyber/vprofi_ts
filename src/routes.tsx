import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFound';
import MainPage from './pages/MainPage/MainPage';
import AdministratorPage from './pages/AdministratorPage/AdministratorPage';
import Dashboard from './pages/AdministratorPage/components/Dashboard';
import Users from './pages/AdministratorPage/components/Users';
import withHeader from './hoc/withHeader/withHeader';
import Categories from './pages/AdministratorPage/components/Categories';
import Settings from './pages/AdministratorPage/components/Settings';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/admin">
				<Redirect to={'/admin/dashboard'} />
			</Route>
			<Switch>
				<Route path="/" exact component={withHeader(MainPage)} />
				<Route path="/admin/dashboard" exact component={() => <AdministratorPage component={<Dashboard />} />} />
				<Route path="/admin/users" exact component={() => <AdministratorPage component={<Users />} />} />
				<Route path="/admin/categories" exact component={() => <AdministratorPage component={<Categories />} />} />
				<Route path="/admin/settings" exact component={() => <AdministratorPage component={<Settings />} />} />
				<Route path="/404" exact component={() => <NotFoundPage />} />
				<Redirect to="/404" />
			</Switch>
		</Switch>
	);
};

export default Routes;
