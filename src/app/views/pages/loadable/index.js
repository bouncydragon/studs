import React from 'react';
import Loadable from 'react-loadable';
import { compose, setDisplayName, setPropTypes } from 'recompose';
import { Grid, Row, Col } from 'react-bootstrap';
import Loading from '../../components/Loading';

const Card = Loadable({
  loader: () => import('../../components/Card'),
  loading: Loading
});

const LoadableComponent = Loadable({
  loader: () => import('./loadable-component'),
  loading: Loading
});

const enhance = compose(setDisplayName('loadablePage'), setPropTypes({}));

export default enhance(() => (
  <div className="content">
    <Grid fluid>
      <Row>
        <Col lg={12} sm={12}>
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
                <LoadableComponent />
              </div>
            }
          />
        </Col>
      </Row>
    </Grid>
  </div>
));
