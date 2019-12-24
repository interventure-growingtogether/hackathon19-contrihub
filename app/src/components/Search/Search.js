import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Row, Col, Card, Tag, Input, Select } from 'antd';

import ProjectIcon from './ProjectIcon';

import { getRepoData } from '../../Redux/actions/getRepoData';

let nameDebounce = null;
let licensesDebounce = null;

const Search = ({ repos, history, getRepoData }) => {
	const [language, setLanguage] = useState(undefined);
	const [name, setName] = useState(undefined);
	const [licenses, setLicenses] = useState([]);

	const changeLanguage = useCallback(value => {
		setLanguage(value);

		getRepoData(value, name, licenses);
	});

	const changeName = useCallback(event => {
		event.persist();

		clearTimeout(nameDebounce);

		nameDebounce = setTimeout(() => {
			const value = event.target.value;

			setName(value);

			getRepoData(language, value, licenses);
		}, 500);
	});

	const changeLicenses = useCallback(values => {
		clearTimeout(licensesDebounce);

		licensesDebounce = setTimeout(() => {
			setLicenses(values);

			getRepoData(language, name, values);
		}, 500);
	});

	return (
		<div style={{ position: 'relative', top: 0, bottom: 0 }}>
			<Input.Group compact>
				<Input.Search placeholder="Project name" size="large" style={{ marginBottom: '10px', width: '80%' }} />

				<Select
					defaultValue="any language"
					size="large"
					style={{ width: '20%' }}
					defaultValue=""
					onChange={changeLanguage}
				>
					<Select.Option value="">any language</Select.Option>
					<Select.Option value="javascript">javascript</Select.Option>
					<Select.Option value="rust">rust</Select.Option>
					<Select.Option value="golang">golang</Select.Option>
					<Select.Option value="java">java</Select.Option>
					<Select.Option value="python">python</Select.Option>
					<Select.Option value="c#">dotnet</Select.Option>
					<Select.Option value="haskell">haskell</Select.Option>
					<Select.Option value="c++">c++</Select.Option>
					<Select.Option value="ruby">ruby</Select.Option>
					<Select.Option value="v">v lol</Select.Option>
				</Select>

				<Select
					defaultValue="any licence"
					size="large"
					style={{ width: 'auto', minWidth: '150px', marginBottom: '10px' }}
					mode="multiple"
					placeholder="any license"
					onChange={changeLicenses}
				>
					<Select.Option value="apache-2.0">apache 2.0</Select.Option>
					<Select.Option value="mit">MIT</Select.Option>
					<Select.Option value="gpl-2.0">GPL 2.0</Select.Option>
					<Select.Option value="gpl-3.0">GPL 3.0</Select.Option>
				</Select>
			</Input.Group>

			<Row gutter={[10, 10]} type="flex" style={{ overflow: 'auto', height: '80vh' }}>
				{repos &&
					repos.map(project => (
						<Col key={project.full_name} span={6} onClick={() => history.push(`details/${project.id}`)}>
							<Card title={project.full_name} bordered hoverable extra={project.language}>
								<div className="cardsBody--tags">
									{project.topics &&
										project.topics.map(topic => (
											<Tag key={`${project.name}-tag-${topic}`}>{topic}</Tag>
										))}
								</div>

								<div className="cardsBody--stars" style={{ marginTop: '10px' }}>
									<ProjectIcon type="star" number={project.stargazers_count} />
									<ProjectIcon type="eye" number={project.open_issues} />
								</div>
							</Card>
						</Col>
					))}
			</Row>
		</div>
	);
};

Search.propTypes = {
	repos: PropTypes.arrayOf(PropTypes.object),
};

Search.defaultProps = {
	repos: [
		{
			name: 'react-super-cool-slider',
			language: 'javascript',
			tags: ['react', 'component'],
			stars: 45435,
			issues: 3,
		},
		{
			name: 'next-redux-killer-tyool-2020',
			language: 'javascript',
			tags: ['state management', 'hype'],
			stars: 1,
			issues: 0,
		},
		{
			name: 'just-migrated-to-hooks-check-it-out',
			language: 'javascript',
			tags: ['react', 'hooks', 'hype'],
			stars: 4332,
			issues: 0,
		},
		{
			name: 'serverless-kubernates-deep-blockchain',
			language: 'golang',
			tags: ['hype', 'blockchain', 'machine learning', 'serverless', 'kubernates', 'docker', 'did i say hype?'],
			stars: 44543550,
			issues: 1, // rewrite in rust issue lol
		},
		{
			name: 'react-dark-mode-toggle',
			language: 'javascript',
			tags: ['react', 'component'],
			stars: 49494,
			issues: 2,
		},
		{
			name: 'rust-wasm-compiler',
			language: 'rust',
			tags: ['web assembly', 'perfectly moral'],
			stars: 9493,
			issues: 5,
		},
	],
};

const mapStateToProps = state => ({
	repos: state.repos.data,
});

export default withRouter(connect(mapStateToProps, { getRepoData })(Search));
