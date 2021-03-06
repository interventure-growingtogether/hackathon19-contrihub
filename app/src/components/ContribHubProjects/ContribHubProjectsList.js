import React from 'react';
import { Card, Col, Row, Tag } from 'antd';
import ProjectIcon from '../Search/ProjectIcon';
import { database } from '../../config/firebase';

class ContribHubProjectsList extends React.Component {
	// eslint-disable-next-line react/state-in-constructor
	state = {
		repos: [],
	};

	componentDidMount() {
		database.ref('projects').on('value', (a)  =>{
			const value = a.val();
			Object.keys(value).forEach(key => {
				const id = key;

				const {  Language, Name } = value[key].project;
				this.setState(state=>state.repos.push({id, name:Name,language:Language}))
			});
		});
	}

	render() {
		const { repos } = this.state;
		const { history } = this.props;

		return (
			// eslint-disable-next-line react/jsx-filename-extension
			<div style={{ margin: '2rem' }}>
				<Row gutter={[10, 10]} type="flex" style={{ overflow: 'auto' }}>
					{repos &&
						repos.map(project => (
							<Col key={project.full_name} span={6} onClick={() => history.push(`details/${project.id}`)}>
								<Card title={project.full_name} bordered hoverable extra={project.language}>
									<div>
										{project.topics &&
											project.topics.map(topic => (
												<Tag key={`${project.name}-tag-${topic}`}>{topic}</Tag>
											))}
									</div>

									<div style={{ marginTop: '10px' }}>
										<ProjectIcon type="star" number={project.stargazers_count} />
										<ProjectIcon type="eye" number={project.open_issues} />
									</div>
								</Card>
							</Col>
						))}
				</Row>
			</div>
		);
	}
}

export default ContribHubProjectsList;
