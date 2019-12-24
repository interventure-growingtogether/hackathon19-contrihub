import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { PageHeader } from 'antd';
import { connect } from 'react-redux';

import RepoDetails from './components/RepoDetails/RepoDetails';
import LoginButton from './components/Auth/LoginButton';
import Auth from './components/Auth/Auth';
import Search from './components/Search/Search';

import './App.css';
import 'antd/dist/antd.css';
import { getRepoData } from './Redux/actions/getRepoData';

function App({ getRepoData, repos }) {
	useEffect(() => {
		getRepoData();
	}, []);

	useEffect(() => {
		console.log('REPOS CHANGED', repos);
	}, [repos]);

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

const mapStateToProps = state => ({
	repos: state.repos,
});

export default connect(mapStateToProps, { getRepoData })(App);
