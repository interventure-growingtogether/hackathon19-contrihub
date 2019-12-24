import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'antd/dist/antd.css';

import LoginButton from './components/Auth/LoginButton';
import Auth from './components/Auth/Auth';
import { Provider } from 'react-redux';

import store from './Redux';

import './App.css';

const Root = () => (
	<Provider store={store}>
		<Router>
			<div className="App">
				<LoginButton />

				<Route path="/auth" component={Auth} />
			</div>
		</Router>
	</Provider>
);

function App() {
	return <Root />;
}

export default App;
