import React from 'react';
import './App.scss';
import { IApp } from './store/types/app';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Routes from './routes';
import Wrappers from './hoc/Wrappers';
import Header from './components/Header/Header';
import style from './components/Header/header.module.scss';
import { createStyles, Slide, Theme } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import ItemsMenu from './components/ItemsMenu/ItemsMenu';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			height: 180
		},
		wrapper: {
			width: 100 + theme.spacing(2)
		},
		paper: {
			zIndex: 1,
			position: 'relative',
			margin: theme.spacing(1)
		},
		svg: {
			width: 100,
			height: 100
		},
		polygon: {
			fill: theme.palette.common.white,
			stroke: theme.palette.divider,
			strokeWidth: 1
		}
	})
);

const App = () => {
	const [checked, setChecked] = React.useState(false);

	const classes = useStyles();

	const handleChange = () => {
		setChecked(prev => !prev);
	};
	return (
		<div className="App">
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

export default App;
