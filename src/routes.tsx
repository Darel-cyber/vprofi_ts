import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage/NotFound'

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={() => <div>Главная страница</div>} />
			<Route path="/404" exact component={() => <NotFoundPage />} />
			<Redirect to="/404" />
		</Switch>
	)
}

export default Routes
