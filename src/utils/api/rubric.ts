import { fetch } from '../fetch';

export const requestDirections = () => fetch.get('directions');

export const requestSpecialties = () => fetch.get('specialties');

export const requestSpecializations = () => fetch.get('specializations');
