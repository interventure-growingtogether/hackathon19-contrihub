import React, { Component } from 'react';

import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

class RepoDetails extends Component {
	render() {
		return (
			<Layout className="h-full-screen">
				<Sider>Sider</Sider>

				<Layout>
					<Header>Header</Header>
					<Content>Content</Content>
					<Footer>Footer</Footer>
				</Layout>
			</Layout>
		);
	}
}

export default RepoDetails;
