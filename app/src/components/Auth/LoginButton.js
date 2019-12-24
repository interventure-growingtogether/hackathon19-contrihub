import React from 'react';

import { Button } from 'antd';

import config from '../../config';
import { useSelector, useDispatch } from 'react-redux';
import { loggedOut } from '../../Redux/actions/auth';

export default function LoginButton() {
	const redirectUri = window.location.origin;
	const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
	const dispatch = useDispatch();

	function handleRedirect() {
		if (isLoggedIn) {
			dispatch(loggedOut());
		} else {
			window.location = `https://github.com/login/oauth/authorize?client_id=${config.auth.clientId}&redirect_uri=${redirectUri}/auth&state=${config.auth.state}`;
		}
	}

	return (
		<Button type="primary" onClick={handleRedirect}>
			{isLoggedIn ? 'Log out' : 'Login with Github'}
		</Button>
	);
}
