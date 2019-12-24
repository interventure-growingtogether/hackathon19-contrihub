import actionTypes from '../actionTypes';

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_REPO_LANGUAGES_SUCCESS:
      return { data: [...action.payload] };
    case actionTypes.GET_REPO_LANGUAGES_FAILURE:
      return { data: [] };
    default:
      return state;
  }
};
