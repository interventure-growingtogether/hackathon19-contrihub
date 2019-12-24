import { combineReducers } from 'redux';

import auth from './auth';
import repos from './repoData';
import spinner from './spinnerStatus';

export default combineReducers({
	auth,
	repos,
	spinner,
});
