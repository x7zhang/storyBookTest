import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

import NeedHelp from '../src/components/needHelp';

export const user = {
    username: 'Alex'
};

storiesOf('NeedHelp', module)
  .addDecorator(withKnobs)
  .add('default', () => <NeedHelp user={object('user', {...user})} />);
