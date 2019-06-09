import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import PureSearch from '../src/container/search';


export const defaultTasks = [
    { title: 'Task 1' },
    { title: 'Task 2' },
    { title: 'Task 3' },
    { title: 'Task 4' },
    { title: 'Task 5' },
    { title: 'Task 6' },
  ];
//simple mock of redux store
  const store = {
      getState: () => {
          return {
              faq: defaultTasks,
          };
      },
      subscribe: () => 0,
      dispatch: action('dispatch'),
  };

  storiesOf('Search', module)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add('default', ()=> <PureSearch />)