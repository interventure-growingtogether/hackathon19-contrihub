import React from 'react';
import { Provider } from 'react-redux';

import store from './Redux';

import './App.css';

const Root = () => (
	<Provider store={store}>
		<div className="App">Udri Joco!</div>
	</Provider>
);

function App() {
	return <Root />;
}

export default App;
