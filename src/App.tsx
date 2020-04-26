import React, { useEffect } from 'react';
import './App.scss';
import Routes from './routes';
import { Backdrop, CircularProgress, createStyles, Theme } from '@material-ui/core';
import { getRubricsSaga } from './store/actions/rubric';
import { connect } from 'react-redux';
import { IApplicationState } from './store/reducers';
import { makeStyles } from '@material-ui/core/styles';

interface IApp {
	isInitialized: boolean;
	globalLoader: boolean;
	getRubricsSaga: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		backdrop: {
			zIndex: theme.zIndex.drawer + 1,
			color: '#fff'
		}
	})
);

const App = ({ isInitialized, globalLoader, getRubricsSaga }: IApp) => {
	useEffect(() => {
		console.log('useEffect');
		getRubricsSaga();
	}, []);

	const classes = useStyles();

	return (
		<div className="App">
			<Backdrop className={classes.backdrop} open={globalLoader}>
				<CircularProgress color="inherit" />
			</Backdrop>

			<Routes />
		</div>
	);
};

const mapStateToProps = (state: IApplicationState) => ({
	isInitialized: state.app.isInitialized,
	globalLoader: state.app.globalLoader
});

const mapDispatchToProps = {
	getRubricsSaga
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
