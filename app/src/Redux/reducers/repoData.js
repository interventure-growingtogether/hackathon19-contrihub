import actionTypes from '../actionTypes';

const initialState = {
	data: [],
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_REPO_DATA_SUCCESS:
			return { data: action.payload };
		case actionTypes.GET_REPO_DATA_ERROR:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};
