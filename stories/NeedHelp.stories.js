import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import { number, boolean, text, select, date, array, color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import NeedHelp from '../src/components/needHelp';

export const user = {
    username: 'Alex'
};


const IncludeLocally = `
# Include Locally

You can include propTables locally by adding \`includePropTables\` value to 
readme object you pass to specific story. It is an array of React component.
If valid \`includePropTables\` exists, propTable of components inside of it
only shows and ignores \`excludePropTables\` rule at all.

### From config.js
\`\`\`javascript
import NeedHelp from '../src/components/needHelp';
addParameters({
  readme: {
    excludePropTables: [NeedHelp]
  },
});
\`\`\`

### From specific story
\`\`\`javascript
import NeedHelp from '../src/components/needHelp';
storiesOf("NeedHelp", module)
  .add("readme include locally", () => <NeedHelp user={object('user', {...user})} />, {
    readme: {
      content: \`<!-- STORY --><!-- PROPS -->\`,
      includePropTables: [NeedHelp]
    }
  })
\`\`\`

You can notice from below that the both component and its propTable
are showing eventhough from \`config.js\`, \`NeedHelp\` is
inside of \`excludePropTables\`. This is because the implementation of
\`includePropTables\` always win over \`excludePropTables\`. The reason for
this is to give the user an excluding feature globally for conveninece, 
however whenever user wants, they can include whatever component they want
and ignore global \`excludePropTables\` rule.

**Note**: \`includePropTables\` doesn't add propTable to its showing list.
It shows that are **already** inside of list which is rendered from 
story. Currently you can't add whatever propTable that are not rendered
from story.
`;




storiesOf('NeedHelp', module)
  .addDecorator(withKnobs)
  .add('default', () => <NeedHelp user={object('user', {...user})} />)
  .add('info', () => <NeedHelp user={object('user', {...user})} />,
  {
    info: {
      propTables: [NeedHelp]
    },
  })
  .add('knobs styles', () => {
    const name = text('Name', 'Test name');
    const dob = date('DOB', new Date('January 20 1887'));

    const bold = boolean('Bold', false);
    const selectedColor = color('Color', 'black');
    const favoriteNumber = number('Favorite Number', 42);
    const comfortTemp = number('Comfort Temp', 72, { range: true, min: 60, max: 90, step: 1 });

    const passions = array('Passions', ['Fishing', 'Skiing']);

    const customStyle = object('Style', {
      fontFamily: 'Arial',
      padding: 20,
    });

    const style = {
      ...customStyle,
      fontWeight: bold ? 800 : 400,
      favoriteNumber,
      color: selectedColor,
    };

    return (
      <div style={style}>
        <p>Date: </p>
        <p>{dob}</p>
        <h3>{name}</h3>
        I like: <ul>{passions.map((p, i) => <li key={i}>{p}</li>)}</ul>
        <p>My favorite number is {favoriteNumber}.</p>
        <p>My most comfortable room temperature is {comfortTemp} degrees Fahrenheit.</p>
      </div>
    );
  })
  .add('readme include locally', () => <NeedHelp user={object('user', {...user})} />,
    {
      readme: {
        content: `${IncludeLocally}<!-- STORY --><!-- PROPS -->`,
        includePropTables: [NeedHelp],
      },
    }
  )
  