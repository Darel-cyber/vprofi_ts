import React from 'react';
import Header from '../../components/Header/Header';
import { Slide } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import style from '../../components/Header/header.module.scss';
import ItemsMenu from '../../components/ItemsMenu/ItemsMenuContainer';

const withHeader = (WrappedComponent: React.FunctionComponent) => {
	const WithHeader = () => {
		const [checked, setChecked] = React.useState(false);

		return (
			<>
				<Header checked={checked} toggleChecked={() => setChecked(!checked)} />

				<Slide direction="down" in={checked} mountOnEnter unmountOnExit>
					<Paper elevation={20} className={style.itemsMenu}>
						<div style={{ padding: '16px' }}>
							<ItemsMenu />
						</div>
					</Paper>
				</Slide>

				<WrappedComponent />
			</>
		);
	};

	return WithHeader;
};

export default withHeader;
