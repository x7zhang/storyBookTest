import { configure, addDecorator } from '@storybook/react';
import requireContext from 'require-context.macro';

const stories = requireContext('../stories', true, /\.stories\.js$/);

const loadStories = () => {
    stories.keys().forEach(filename =>stories(filename));
};

configure(loadStories, module);
