import { action } from 'typesafe-actions'
import { AppTypes } from '../constants/app'

export const showMessage = (message: string) =>
	action(AppTypes.SHOW_MESSAGE, message)

export const deleteMessage = () => action(AppTypes.DELETE_MESSAGE)
