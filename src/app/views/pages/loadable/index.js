import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { compose, setDisplayName, setPropTypes } from 'recompose';
import { Grid, Row, Col } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import Loading from '../../components/Loading';

const Card = Loadable({
  loader: () => import('../../components/Card'),
  loading: () => Loading
});

const Load1 = Loadable({
    loader: () => import('./load1'),
  loading: () => Loading
});

const enhance = compose(setDisplayName('loadablePage'), setPropTypes({}));

const codeString = 'compose(hoc1, hoc2, hoc3)';

export default enhance(({ ...props }) => (
  <div className="content">
    <Grid fluid>
      <Row>
        <Col lg={12} sm={12}>
          <Load1/>
          <Card
            title="Loadable"
            category="optimization"
            source="https://github.com/thejameskyle/react-loadable"
            statsIcon="fa fa-history"
            content={
              <div className="table-full-width" style={{ padding: '30px' }}>
                <p>
                  A higher order component for loading components with dynamic
                  imports.
                </p>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {codeString}
                </SyntaxHighlighter>
              </div>
            }
          />
        </Col>
      </Row>
    </Grid>
  </div>
));
