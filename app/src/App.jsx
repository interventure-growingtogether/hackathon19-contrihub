import React, { useEffect } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { PageHeader, Row, Col } from 'antd';
import { connect } from 'react-redux';

import AddProject from './Containers/AddProject';

import RepoDetails from './components/RepoDetails/RepoDetails';
import LoginButton from './components/Auth/LoginButton';
import Auth from './components/Auth/Auth';
import Search from './components/Search/Search';
import Spinner from './components/Spinner/Spinner';
import 'antd/dist/antd.css';
import './App.css';
import { getRepoData } from './Redux/actions/getRepoData';
import ContribHubProjectsList from './components/ContribHubProjects/ContribHubProjectsList';
import { Button } from 'antd';

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
						<Link to={'/Search'}>
							<Button style={{ margin: '.5rem' }}>GitHub Projects</Button>
						</Link>
						<Link to={'/cprojects'}>
							<Button style={{ margin: '.5rem' }}>ContribHub Projects</Button>
						</Link>
						<Link to={'/create'}>
							<Button style={{ margin: '.5rem' }}>New project</Button>
						</Link>

						<LoginButton />
					</PageHeader>
					<Switch>
						<Route path="/search" component={Search} />
						<Redirect from="/" exact to="/search" />
						<Route path="/auth" component={Auth} />
						<Route path="/cprojects" component={ContribHubProjectsList} />
						<Route path="/details/:id" component={RepoDetails} />
						<Route path="/create" component={AddProject} />
					</Switch>
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
//
