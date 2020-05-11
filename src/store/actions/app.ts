import { createAction, createCustomAction } from 'typesafe-actions';
import { AppTypes } from '../constants/app';

export const setInitialized = createAction(AppTypes.INITIALIZED_SUCCESS)();

export const showMessage = createCustomAction(AppTypes.SHOW_MESSAGE, (message: string) => ({ message }));

export const deleteMessage = createAction(AppTypes.DELETE_MESSAGE)();

export const setGlobalLoader = createCustomAction(AppTypes.SET_GLOBAL_LOADER, (status: boolean) => ({ status }));

export const setPublicHeaderVisible = createCustomAction(AppTypes.SET_PUBLIC_HEADER_VISIBLE, (status: boolean) => ({
	status
}));
