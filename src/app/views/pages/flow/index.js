import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { compose, setDisplayName, setPropTypes } from 'recompose';
import { Grid, Row, Col } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import Loading from '../../components/Loading';

const HelloWorld = Loadable({
  loader: () => import('../loadable/loadable-component'),
  loading: Loading,
});

const AAA = () => {
  return (
    <div>
      <HelloWorld />
    </div>
  );
}

// class AAA extends Component {
//   render() {
//     return (
//       <div>
//         <HelloWorld />
//       </div>
//     );
//   }
// }

export default AAA;
