import React, { useEffect } from 'react';
import { setPublicHeaderVisible, showMessage } from '../../store/actions/app';
import { IApplicationState } from '../../store/reducers';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

interface IMainPage {
	showMessage: (message: string) => void;
	setPublicHeaderVisible: (isVisible: boolean) => void;
}

const styled = (color: string) => ({
	width: '100%',
	height: '400px',
	border: '1px solid black',
	borderLeft: 'none',
	borderRight: 'none',
	backgroundColor: color
});

const MainPage = ({ showMessage, setPublicHeaderVisible }: IMainPage) => {
	useEffect(() => {
		setPublicHeaderVisible(true);
	}, []);

	return (
		<div>
			<div style={styled('pink')} />
			<div
				style={{
					width: '100%',
					height: '150px',
					border: '1px solid black',
					borderLeft: 'none',
					borderRight: 'none',
					backgroundColor: 'purple'
				}}
			/>
			<div style={styled('red')} />
			<div style={styled('blue')} />
			{/*			Главная страница
			<Button
				variant="contained"
				color="primary"
				onClick={() => showMessage('new message')}
			>
				Huyak
			</Button>*/}
		</div>
	);
};

const mapStateToProps = null;

const mapDispatchToProps = {
	showMessage,
	setPublicHeaderVisible
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
