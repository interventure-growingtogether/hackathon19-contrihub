import { combineReducers } from 'redux';

import auth from './auth';
import repos from './repoData';
import spinner from './spinnerStatus';
import repoLanguages from './repoLanguages';

export default combineReducers({
	auth,
	repos,
	spinner,
	repoLanguages
});
