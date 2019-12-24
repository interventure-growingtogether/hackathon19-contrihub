import axios from 'axios';

import actionTypes from '../actionTypes';

export const getRepoData = (language, name, licenses) => dispatch => {
	dispatch({ type: actionTypes.SHOW_SPINNER });

	const queryParams = [
		'help-wanted-issues:>0',
	];

	if (name) {
		queryParams.push(`${name} in:name`);
	}

	if (language) {
		queryParams.push(`language:${language}`);
	}

	const query = queryParams.join('+');

	return axios({
			url: `https://api.github.com/search/repositories?q={$query}&sort=interactions&order=desc"`,
			method: 'GET',
			headers: {
				'Accept': 'application/vnd.github.mercy-preview+json',
			},
		})
		.then(res => {
			dispatch({ type: actionTypes.HIDE_SPINNER });

			if (res.data) {
				return dispatch({
					type: actionTypes.GET_REPO_DATA_SUCCESS,
					payload: res.data.items,
				});
			}
		})
		.catch(err => {
			dispatch({ type: actionTypes.HIDE_SPINNER });

			return dispatch({
				type: actionTypes.GET_REPO_DATA_ERROR,
				payload: err,
			});
		});
};
