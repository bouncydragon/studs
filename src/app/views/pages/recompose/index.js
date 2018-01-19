import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Card from '../../components/Card';

class Recompose extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={12} sm={12}>
              <Card
                title="Tasks"
                category="Backend development"
                stats="Updated 3 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width" style={{ padding: '30px' }}>


                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Recompose;
