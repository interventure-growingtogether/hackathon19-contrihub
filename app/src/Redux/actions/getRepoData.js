import axios from 'axios';

import actionTypes from '../actionTypes';

export const getRepoData = (language = 'javascript') => dispatch => {
	dispatch({ type: actionTypes.SHOW_SPINNER });
	return axios({
			url: `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc"`,
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
