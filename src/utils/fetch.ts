import axios from 'axios';

export const fetch = axios.create({
	baseURL: 'http://localhost:3002/',
	headers: {
		'Content-Type': 'application/json',
		// Authorization: accessToken
	}
	// withCredentials: true
});
