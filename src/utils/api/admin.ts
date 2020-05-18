import { fetch } from '../fetch';

export const requestDashboard = () => fetch.get('admin/dashboard');

export const requestUsers = () => fetch.get('admin/users');

export const requestAdminsAds = (userId: number) => fetch.get(`admin/user/${userId}/ad`);
