import React from "react";
import PropTypes from "prop-types";
import {Row, Col, Card, Tag, Input, Select} from "antd";

import ProjectIcon from './ProjectIcon';

const Search = ({projects}) => {
	return <div>
		<Input.Group compact>
			<Input.Search placeholder="Project name" size="large" style={{marginBottom: '20px', width: '80%'}} />
			<Select defaultValue="any language" size="large" style={{width: '20%'}}>
				<Select.Option value="">any language</Select.Option>
				<Select.Option value="javascript">javascript</Select.Option>
				<Select.Option value="rust">rust</Select.Option>
				<Select.Option value="golang">golang</Select.Option>
				<Select.Option value="java">java</Select.Option>
				<Select.Option value="python">python</Select.Option>
				<Select.Option value="dotnet">dotnet</Select.Option>
				<Select.Option value="haskell">haskell</Select.Option>
				<Select.Option value="c++">c++</Select.Option>
				<Select.Option value="ruby">ruby</Select.Option>
				<Select.Option value="v">v lol</Select.Option>
			</Select>
		</Input.Group>

		<Row gutter={[10, 10]} type="flex" style={{overflow: 'auto'}}>
			{projects.map(project => (
				<Col key={project.name} span={6}>
					<Card title={project.name} bordered hoverable extra={project.language}>
						<div>{project.tags && project.tags.map(tag => <Tag key={`${project.name}-tag-${tag}`}>{tag}</Tag>)}</div>
						<div style={{marginTop: '10px'}}>
							<ProjectIcon type="star" number={project.stars} />
							<ProjectIcon type="eye" number={project.issues} />
						</div>
					</Card>
				</Col>
			))}
		</Row>
	</div>;
};

Search.propTypes = {
	projects: PropTypes.arrayOf(PropTypes.object),
};

Search.defaultProps = {
	projects: [
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
		}
	],
};

export default Search;
