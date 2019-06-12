import { configure, addDecorator } from '@storybook/react';
import requireContext from 'require-context.macro';
import { addReadme } from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';

const stories = requireContext('../stories', true, /\.stories\.js$/);
addDecorator(withInfo);
addDecorator(addReadme);

const loadStories = () => {
    stories.keys().forEach(filename =>stories(filename));
};

configure(loadStories, module);