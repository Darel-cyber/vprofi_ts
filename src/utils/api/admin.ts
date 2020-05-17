import { fetch } from '../fetch';

export const requestDashboard = () => fetch.get('admin/dashboard');

export const requestUsers = () => fetch.get('admin/users');
