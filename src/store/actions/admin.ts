import { createAction, createCustomAction } from 'typesafe-actions';
import { AdminTypes } from '../constants/admin';
import { IUser } from '../types/user';

export const getUsers = createAction(AdminTypes.GET_USERS)();

export const setUsers = createCustomAction(AdminTypes.SET_USERS, (users: IUser[]) => ({ users }));

export const setLoader = createCustomAction(AdminTypes.SET_LOADER, (status: boolean) => ({ status }));
