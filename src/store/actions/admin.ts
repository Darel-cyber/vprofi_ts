import { createAction, createCustomAction } from 'typesafe-actions';
import { adminTypes } from '../constants/admin';
import { IUser } from '../types/user';
import { IAdminAd } from '../types/admin';

export const getUsersSaga = createAction(adminTypes.GET_USERS_SAGA)();

export const getAdsSaga = createCustomAction(adminTypes.GET_ADS_SAGA, (userId: number) => ({ userId }));

export const setUsers = createCustomAction(adminTypes.SET_USERS, (users: IUser[]) => ({ users }));

export const setAds = createCustomAction(adminTypes.SET_ADS, (ads: IAdminAd[]) => ({ ads }));

export const setUsersLoader = createCustomAction(adminTypes.SET_USERS_LOADER, (status: boolean) => ({ status }));

export const setAdsLoader = createCustomAction(adminTypes.SET_ADS_LOADER, (status: boolean) => ({ status }));
