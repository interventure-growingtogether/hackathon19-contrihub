import axios from 'axios';
import qs from 'query-string';

import config from '../../config';

export const AUTH_CODE_RECEIVED = 'AUTH_CODE_RECEIVED';
export const TOKEN_OBTAINED = 'TOKEN_OBTAINED';
export const LOGGED_OUT = 'LOGGED_OUT';

export function authCodeReceived(code) {
	return async dispatch => {
		dispatch({ type: AUTH_CODE_RECEIVED, payload: { code } });

		const response = await axios.post('/login/oauth/access_token', {
			code,
			client_id: config.auth.clientId,
			client_secret: config.auth.clientSecret,
		});

		const data = qs.parse(response.data);

		localStorage.setItem('token', data.access_token);

		dispatch(tokenObtained(data.access_token));
	};
}

export function tokenObtained(token) {
	return { type: TOKEN_OBTAINED, payload: { token } };
}

export function loggedOut() {
	localStorage.removeItem('token');

	return { type: LOGGED_OUT };
}
