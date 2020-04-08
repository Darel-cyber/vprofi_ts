import React from 'react';
import './App.scss';
import Routes from './routes';
import Header from './components/Header/Header';
import style from './components/Header/header.module.scss';
import { Slide } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ItemsMenu from './components/ItemsMenu/ItemsMenu';

const App = () => {
	const [checked, setChecked] = React.useState(false);

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
