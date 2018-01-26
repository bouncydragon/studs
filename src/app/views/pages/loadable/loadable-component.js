import React from 'react';
import { compose, setDisplayName } from 'recompose';

const enhance = compose(setDisplayName('loadableCompoment'));

export default enhance(() => {
  return (
    <div>
    <div style={{ backgroundColor: 'yellow' }}>I am a loadable component</div>
    </div>
  );
});
