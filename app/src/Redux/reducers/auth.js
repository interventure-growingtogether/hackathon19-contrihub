import { TOKEN_OBTAINED, LOGGED_OUT } from '../actions/auth';

const token = localStorage.getItem('token');

const initialState = {
	isLoggedIn: Boolean(token),
	token,
};

export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case TOKEN_OBTAINED:
			return {
				isLoggedIn: true,
				token: action.payload.token,
			};
		case LOGGED_OUT: {
			return {
				isLoggedIn: false,
				token: null,
			};
		}
	}

	return state;
}
