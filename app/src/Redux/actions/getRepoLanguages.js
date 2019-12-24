import axios from 'axios';

import actionTypes from '../actionTypes';

export const getLanguages = url => dispatch => {
  dispatch({ type: actionTypes.SHOW_SPINNER });

  return axios({
    url,
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github.mercy-preview+json',
    },
  })
    .then(res => {
      dispatch({ type: actionTypes.HIDE_SPINNER });

      if (res.data) {
        return dispatch({
          type: actionTypes.GET_REPO_LANGUAGES_SUCCESS,
          payload: res.data.items,
        });
      }
    })
    .catch(err => {
      dispatch({ type: actionTypes.HIDE_SPINNER });

      return dispatch({
        type: actionTypes.GET_REPO_LANGUAGES_FAILURE,
        payload: err,
      });
    });
};
