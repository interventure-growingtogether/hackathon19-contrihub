import React from 'react';
import { Route } from 'react-router-dom';
import { PageHeader, Row, Col } from 'antd';

import RepoDetails from './components/RepoDetails/RepoDetails';
import LoginButton from './components/Auth/LoginButton';
import Auth from './components/Auth/Auth';
import Search from './components/Search/Search';

import 'antd/dist/antd.css';
import './App.css';

function App() {
	return (
		<Row type="flex" justify="center">
			<Col offset={1} span={22} className="App">
				<PageHeader className="Page__header" title="ContribHub">
					<LoginButton  />
				</PageHeader>

				<Route path="/auth" component={Auth} />
				<Route path="/details" component={RepoDetails} />
				<Route path="/" component={Search} />
			</Col>
		</Row>
	);
}

export default App;
