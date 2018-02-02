import React from 'react';
import { compose, setDisplayName } from 'recompose';

const enhance = compose(setDisplayName('login'));

export default enhance(() => <div>Login!!</div>);
