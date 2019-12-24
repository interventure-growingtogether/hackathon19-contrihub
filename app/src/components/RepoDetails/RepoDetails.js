import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {Layout, Avatar, Descriptions, Typography, Divider, Tag} from 'antd';

import { getContributors } from '../../Redux/actions/getContributors';
import { getLanguages } from '../../Redux/actions/getRepoLanguages';
import './RepoDetails.css';

const { Paragraph } = Typography;
const { Header, Footer, Sider, Content } = Layout;

function RepoDetails({ repo, spinnerVisible, getContributors, getLanguages }) {

	// useEffect(() => {
	// 	if (repo.collaborators_url) {
	// 		getContributors(repo.collaborators_url);
	// 	}
	// }, [repo]);
	//
	// useEffect(() => {
	// 	if (repo.languages_url) {
	// 		getLanguages(repo.languages_url);
	// 	}
	// }, [repo]);


	// fetch contributors

	// fetch languages

	// fetch issues?

	return (
		!spinnerVisible && (
			<Layout className="RepoDetails h-full-screen">
				<Sider className="RepoDetails__Sidebar">
					<Avatar size={150} icon="user" src={repo && repo.owner && repo.owner.avatar_url} />
					<h5 style={{ paddingTop: '2rem', textAlign: 'center' }}>Project owner</h5>
					<h2 style={{ textAlign: 'center' }}>{repo && repo.owner && repo.owner.login}</h2>
				</Sider>

				<Layout className="RepoDetails__Content">
					<Header className="RepoDetails__Header">{repo ? repo.full_name : ''}</Header>

					<Paragraph style={{ paddingLeft: '0', paddingRight: '1rem', marginBottom: 0 }}>
						{repo ? repo.description : null}
					</Paragraph>

					<Divider />

					<Content>
						<Descriptions title="Repo details">
							<Descriptions.Item label="Github stars">
								{repo ? repo.stargazers_count : null}
							</Descriptions.Item>
							<Descriptions.Item label="Github watchers">
								{repo ? repo.watchers_count : null}
							</Descriptions.Item>
							<Descriptions.Item label="Forks">{repo ? repo.forks_count : null}</Descriptions.Item>
							<Descriptions.Item label="Open issues">
								{repo ? repo.open_issues_count : null}
							</Descriptions.Item>
							<Descriptions.Item label="Lines of code">{repo ? repo.size : null}</Descriptions.Item>
						</Descriptions>

						<Divider />
					</Content>

					<Footer style={{ paddingLeft: '0', background: 'none' }}>Contributors here?</Footer>
				</Layout>
			</Layout>
		)
	);
}

const mapStateToProps = (state, ownProps) => {
	const projectId = ownProps.match && ownProps.match.params && parseInt(ownProps.match.params.id);
	const repo = state.repos.data.find(project => project.id === projectId) || {};

	return {
		repo,
		spinnerVisible: state.spinner.visible,
		languages: state.repoLanguages
	};
};

export default connect(mapStateToProps)(RepoDetails);
