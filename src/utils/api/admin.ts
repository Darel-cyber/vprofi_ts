import { fetch } from '../fetch';

export const requestDashboard = () => fetch.get('admin/dashboard');
