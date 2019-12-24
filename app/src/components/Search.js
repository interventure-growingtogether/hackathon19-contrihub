import React from "react";
import PropTypes from "prop-types";
import {Row, Col, Card, Tag} from "antd";

const Search = ({projects}) => {
	return <div>
		<Row gutter={[10, 10]} type="flex">
			{projects.map(project => (
				<Col key={project.name} span={6}>
					<Card title={project.name} bordered hoverable>
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
			tags: ['javascript', 'react', 'component'],
		},
		{
			name: 'next-redux-killer-tyool-2020',
			tags: ['javascript', 'state management', 'hype'],
		},
		{
			name: 'just-migrated-to-hooks-check-it-out',
			tags: ['javascript', 'react', 'hooks', 'hype'],
		},
		{
			name: 'serverless-kubernates-deep-blockchain',
			tags: ['golang', 'hype', 'blockchain', 'machine learning', 'serverless', 'kubernates', 'docker', 'did i say hype?'],
		},
		{
			name: 'react-dark-mode-toggle',
			tags: ['javascript', 'react', 'component'],
		},
		{
			name: 'rust-wasm-compiler',
			tags: ['rust', 'web assembly', 'perfectly moral']
		}
	],
};

export default Search;
