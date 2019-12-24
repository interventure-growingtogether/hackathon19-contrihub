import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import uuid from 'uuid';

import ImageUpload from './ImageUpload';

storiesOf('ImageUpload', module).add('Default', () => {
	return (
		<ImageUpload
			prefixId={uuid()}
			shouldUpload={false}
			maxImages={1}
			shouldUpload={boolean('Should upload?', false)}
		/>
	);
});
