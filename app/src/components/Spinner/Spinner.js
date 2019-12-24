import React from 'react';
import { MagicSpinner } from 'react-spinners-kit';

import './Spinner.css';

const Spinner = props => {
	return (
		<div className="Spinner__container">
			<MagicSpinner size={250} color="#686769" />
		</div>
	);
};

export default Spinner;
