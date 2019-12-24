import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PageHeader } from 'antd';
import { Provider } from 'react-redux';

import store from './Redux';

import RepoDetails from './components/RepoDetails/RepoDetails';
import LoginButton from './components/Auth/LoginButton';
import Auth from './components/Auth/Auth';
import Search from './components/Search';

import "./App.css";
import 'antd/dist/antd.css';

const Root = () => (
	<Provider store={store}>
		<Router>
			<main className="App">
				<PageHeader className="Page__header" title="ContriHub">
					<LoginButton />
				</PageHeader>

				<Route path="/auth" component={Auth} />
				<Route path="/details" component={RepoDetails} />
				<Route path="/landing" component={Search} />
			</main>
		</Router>
	</Provider>
);

function App() {
	return <Root />;
}

export default App;
