import React, { Component } from 'react';

import { Layout, Avatar } from 'antd';

import './RepoDetails.css';

const { Header, Footer, Sider, Content } = Layout;

class RepoDetails extends Component {
	render() {
		return (
			<Layout className="h-full-screen">
				<Sider className="RepoDetails__Sidebar">
					<Avatar size={150} icon="user" />
					<h2 style={{ paddingTop: '2rem' }}>Github username</h2>
				</Sider>

				<Layout>
					<Header className="RepoDetails__Header">
						Repo name here
						<a
							className="github-button"
							href="https://github.com/ntkme/github-buttons"
							data-size="large"
							data-show-count="true"
							aria-label="Star ntkme/github-buttons on GitHub"
						>
							Star
						</a>
					</Header>
					<Content style={{ color: 'black', padding: '2rem' }}>
						Repo details (use Description Ant module?)
					</Content>
					<Footer>Contributors here?</Footer>
				</Layout>
			</Layout>
		);
	}
}

export default RepoDetails;
