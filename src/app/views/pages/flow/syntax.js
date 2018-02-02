import React from 'react';
import PropTypes from 'prop-types';
import { compose, setDisplayName, setPropTypes } from 'recompose';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';

const enhance = compose(
  setDisplayName('flowSyntaxPage'),
  setPropTypes({ nativeType: PropTypes.string })
);

export default enhance(({ nativeType, sampleCode }) => (
  <div>
    <h3>{nativeType}</h3>
    <SyntaxHighlighter language="javascript" style={docco}>
      {sampleCode}
    </SyntaxHighlighter>
    <br />
  </div>
));
