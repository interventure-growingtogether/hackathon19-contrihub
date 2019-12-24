import React from "react";
import PropTypes from "prop-types";
import {Row, Col, Card, Tag, Input} from "antd";

const Search = ({projects}) => {
	return <div>
		<Input.Search placeholder="Search projects..." size="large" style={{marginBottom: '20px'}} />
		<Row gutter={[10, 10]} type="flex">
			{projects.map(project => (
				<Col key={project.name} span={6}>
					<Card title={project.name} bordered hoverable extra={project.language}>
						{project.tags && project.tags.map(tag => <Tag key={`${project.name}-tag-${tag}`}>{tag}</Tag>)}
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
		},
		{
			name: 'next-redux-killer-tyool-2020',
			language: 'javascript',
			tags: ['state management', 'hype'],
		},
		{
			name: 'just-migrated-to-hooks-check-it-out',
			language: 'javascript',
			tags: ['react', 'hooks', 'hype'],
		},
		{
			name: 'serverless-kubernates-deep-blockchain',
			language: 'golang',
			tags: ['hype', 'blockchain', 'machine learning', 'serverless', 'kubernates', 'docker', 'did i say hype?'],
		},
		{
			name: 'react-dark-mode-toggle',
			language: 'javascript',
			tags: ['react', 'component'],
		},
		{
			name: 'rust-wasm-compiler',
			language: 'rust',
			tags: ['web assembly', 'perfectly moral']
		}
	],
};

export default Search;
