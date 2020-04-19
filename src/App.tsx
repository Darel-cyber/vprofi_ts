import React, { useEffect } from 'react';
import './App.scss';
import Routes from './routes';
import Header from './components/Header/Header';
import style from './components/Header/header.module.scss';
import { Backdrop, CircularProgress, createStyles, Slide, Theme } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ItemsMenu from './components/ItemsMenu/ItemsMenuContainer';
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

	const [checked, setChecked] = React.useState(false);

	const classes = useStyles();

	return (
		<div className="App">
			<Backdrop className={classes.backdrop} open={globalLoader}>
				<CircularProgress color="inherit" />
			</Backdrop>

			<Header checked={checked} toggleChecked={() => setChecked(!checked)} />

			<Slide direction="down" in={checked} mountOnEnter unmountOnExit>
				<Paper elevation={20} className={style.itemsMenu}>
					<div style={{ padding: '16px' }}>
						<ItemsMenu />
					</div>
				</Paper>
			</Slide>

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
