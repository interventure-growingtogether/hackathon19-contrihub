import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import ImageUpload from './ImageUpload';

storiesOf('ImageUpload', module).add('Default', () => {
	return <ImageUpload shouldUpload={false} maxImages={5} shouldUpload={boolean('Should upload?', false)} />;
});
