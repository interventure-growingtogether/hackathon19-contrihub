import actionTypes from '../actionTypes';

const initialState = {
	visible: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SHOW_SPINNER:
			return { visible: true };
		case actionTypes.HIDE_SPINNER:
			return { visible: false };
		default:
			return state;
	}
};
