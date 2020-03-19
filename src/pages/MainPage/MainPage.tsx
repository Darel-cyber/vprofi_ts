import React from 'react'
import { showMessage } from '../../store/actions/app'
import { IApplicationState } from '../../store/reducers'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'

interface IMainPage {
	showMessage: (message: string) => void
}

const MainPage = ({ showMessage }: IMainPage) => {
	return (
		<div>
			Главная страница
			<Button
				variant="contained"
				color="primary"
				onClick={() => showMessage('new message')}
			>
				Huyak
			</Button>
		</div>
	)
}

const mapStateToProps = null

const mapDispatchToProps = {
	showMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
