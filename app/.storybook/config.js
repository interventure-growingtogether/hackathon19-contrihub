import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import 'antd/dist/antd.css';

addDecorator(withKnobs);

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
