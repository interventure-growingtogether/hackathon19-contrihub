import React, { useEffect, useState } from 'react';

import { useLocation, Redirect } from 'react-router-dom';
import qs from 'query-string';
import { Button } from 'antd';

import config from '../../config';
import { useDispatch, useSelector } from 'react-redux';
import { authCodeReceived } from '../../Redux/actions/auth';

export default function Auth() {
	const { search } = useLocation();

	const [hasError, setHasError] = useState(false);
	const dispatch = useDispatch();
	const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

	useEffect(() => {
		if (!isLoggedIn) {
			const { code, state } = qs.parse(search);

			if (!code && state !== config.auth.state) {
				setHasError(true);
			}

			dispatch(authCodeReceived(code));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (isLoggedIn) {
		return <Redirect to="/" />;
	}

	if (hasError) {
		return (
			<div>
				<p>There was an issue with authentication. Please try later.</p>

				<Button type="primary">Go home</Button>
			</div>
		);
	}

	return null;
}
