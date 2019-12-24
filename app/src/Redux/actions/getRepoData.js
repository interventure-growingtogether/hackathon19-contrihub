import axios from 'axios';

import actionTypes from '../actionTypes';

export const getRepoData = (language = 'javascript') => dispatch => {
	return axios
		.get(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc"`)
		.then(res => {
			if (res.data) {
				return dispatch({
					type: actionTypes.GET_REPO_DATA_SUCCESS,
					payload: res.data,
				});
			}
		})
		.catch(err => {
			return dispatch({
				type: actionTypes.GET_REPO_DATA_ERROR,
				payload: err,
			});
		});
};
