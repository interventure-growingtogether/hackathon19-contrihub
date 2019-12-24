import React from 'react';

import { Button } from 'antd';

import config from '../../config';

export default function LoginButton() {
	const redirectUri = window.location.origin;

	function handleRedirect() {
		window.location = `https://github.com/login/oauth/authorize?client_id=${config.auth.clientId}&redirect_uri=${redirectUri}/auth&state=${config.auth.state}`;
	}

	return (
		<Button type="primary" onClick={handleRedirect} style={{ marginRight: '2rem' }}>
			Login with Github
		</Button>
	);
}
