import React, { useEffect, useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { connect } from 'react-redux'
import { IApplicationState } from '../../store/reducers'
import { deleteMessage } from '../../store/actions/app'

const mapStateToProps = ({ app }: IApplicationState) => ({
	message: app.message
})

const mapDispatchToProps = {
	deleteMessage
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		close: {
			padding: theme.spacing(0.5)
		}
	})
)

export interface IWithSnackbar {
	message: string
	deleteMessage: () => void
}

export interface ISnackbarMessage {
	message: string
	key: number
}

const withSnackbar = (WrappedComponent: React.FunctionComponent) => {
	const WithSnackbar = ({ message, deleteMessage }: IWithSnackbar) => {
		const queueRef = React.useRef<ISnackbarMessage[]>([])

		const [open, setOpen] = useState(false)

		const [messageInfo, setMessageInfo] = React.useState<
			ISnackbarMessage | undefined
		>(undefined)

		const processQueue = () => {
			if (queueRef.current.length > 0) {
				setMessageInfo(queueRef.current.shift())
				setOpen(true)
			}
		}

		useEffect(() => {
			if (!!message && message.length > 0) {
				queueRef.current.push({
					message,
					key: new Date().getTime()
				})

				if (open) {
					setOpen(false)
				} else {
					processQueue()
				}
			}
		}, [message])

		const handleClose = (
			event: React.SyntheticEvent | MouseEvent,
			reason?: string
		) => {
			if (reason === 'clickaway') {
				return
			}
			deleteMessage()
			setOpen(false)
		}

		const handleExited = () => {
			processQueue()
		}

		const classes = useStyles()
		return (
			<div>
				<Snackbar
					key={messageInfo ? messageInfo.key : undefined}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left'
					}}
					open={open}
					autoHideDuration={4000}
					onClose={handleClose}
					onExited={handleExited}
					message={messageInfo ? messageInfo.message : undefined}
					action={
						<>
							{/*	<Button color="secondary" size="small" onClick={handleClose}>
								UNDO
							</Button>*/}
							<IconButton
								aria-label="close"
								color="inherit"
								className={classes.close}
								onClick={handleClose}
							>
								<CloseIcon />
							</IconButton>
						</>
					}
				/>
				<WrappedComponent />
			</div>
		)
	}

	return connect(mapStateToProps, mapDispatchToProps)(WithSnackbar)
}

export default withSnackbar
