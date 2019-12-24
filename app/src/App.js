import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PageHeader } from 'antd';

import 'antd/dist/antd.css';

import LoginButton from './components/Auth/LoginButton';
import Auth from './components/Auth/Auth';
import { Provider } from 'react-redux';

import store from './Redux';

import './App.css';
import RepoDetails from './components/RepoDetails/RepoDetails';

const Root = () => (
	<Provider store={store}>
		<Router>
			<main className="App">
				<PageHeader title="ContriHub">
					<LoginButton />
				</PageHeader>

				<Route path="/auth" component={Auth} />
				<Route path="/details" component={RepoDetails} />
			</main>
		</Router>
	</Provider>
);

function App() {
	return <Root />;
}

export default App;
