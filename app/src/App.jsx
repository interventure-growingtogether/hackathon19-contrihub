import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { PageHeader, Row, Col } from 'antd';
import { connect } from 'react-redux';

import AddProject from "./Containers/AddProject";

import RepoDetails from './components/RepoDetails/RepoDetails';
import LoginButton from './components/Auth/LoginButton';
import Auth from './components/Auth/Auth';
import Search from './components/Search/Search';
import Spinner from './components/Spinner/Spinner';

import 'antd/dist/antd.css';
import './App.css';
import { getRepoData } from './Redux/actions/getRepoData';

function App({ getRepoData, repos, spinnerVisible }) {
	useEffect(() => {
		getRepoData();
	}, []);

	useEffect(() => {
		console.log('REPOS CHANGED', repos);
	}, [repos]);

	return (
		<main>
			<Row type="flex" justify="center">
				<Col offset={1} span={22} className="App">
					<PageHeader className="Page__header" title="ContribHub">
						<LoginButton />
					</PageHeader>

					<Route path="/auth" component={Auth} />
					<Route path="/details" component={RepoDetails} />
					<Route path="/" component={Search} />
					<Route path="/create" component={AddProject} />
				</Col>
			</Row>

			{spinnerVisible && <Spinner />}
		</main>
	);
}

const mapStateToProps = state => ({
	repos: state.repos,
	spinnerVisible: state.spinner.visible,
});

export default connect(mapStateToProps, { getRepoData })(App);
