import React from 'react';
import Loadable from 'react-loadable';
import { compose, setDisplayName, setPropTypes } from 'recompose';
import { Grid, Row, Col } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import Loading from '../../components/Loading';

const Card = Loadable({
  loader: () => import('../../components/Card'),
  loading: () => Loading,
});

const enhance = compose(setDisplayName('RecomposePage'), setPropTypes({}));

const codeString = 'compose(hoc1, hoc2, hoc3)';

export default enhance(() => (
  <div className="content">
    <Grid fluid>
      <Row>
        <Col lg={12} sm={12}>
          <Card
            title="Recompose"
            category="coding-style"
            source="https://github.com/acdlite/recompose/blob/master/docs/API.md"
            statsIcon="fa fa-history"
            content={
              <div className="table-full-width" style={{ padding: '30px' }}>
                <p>
                  Recompose is a React utility belt for function components and
                  higher-order components. Think of it like lodash for React.
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
