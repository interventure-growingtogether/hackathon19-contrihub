import { combineReducers } from 'redux';

import auth from './auth';
import repos from './repoData';

export default combineReducers({
	auth,
    repos
});
