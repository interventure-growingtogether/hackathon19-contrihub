import React from 'react';
import { Route } from 'react-router-dom';
import { PageHeader } from 'antd';

import RepoDetails from './components/RepoDetails/RepoDetails';
import LoginButton from './components/Auth/LoginButton';
import Auth from './components/Auth/Auth';
import Search from './components/Search/Search';

import './App.css';
import 'antd/dist/antd.css';

function App() {
	return (
		<main className="App">
			<PageHeader className="Page__header" title="ContriHub">
				<LoginButton />
			</PageHeader>

			<Route path="/auth" component={Auth} />
			<Route path="/details" component={RepoDetails} />
			<Route path="/landing" component={Search} />
		</main>
	);
}

export default App;
