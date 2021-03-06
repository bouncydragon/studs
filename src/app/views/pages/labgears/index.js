import React from 'react';
import Loadable from 'react-loadable';
import styled from 'styled-components';
import Spinner from '@labgears/spinner';
import Text from '@labgears/text';
import { LabGearsThemeProvider } from '@labgears/theme';
import { compose, setDisplayName, setPropTypes } from 'recompose';
import { Grid, Row, Col } from 'react-bootstrap';
import Loading from '../../components/Loading';

const Card = Loadable({
  loader: () => import('../../components/Card'),
  loading: Loading,
});

const enhance = compose(setDisplayName('labGearsPage'), setPropTypes({}));

const StyledText = styled(Text)`
  border: 4px solid;
`;

export default enhance(() => (
  <div className="content">
    <Grid fluid>
      <Row>
        

        <Col lg={12} sm={12}>
          <Card
            title="LabGears"
            category="component library"
            source="https://github.com/hanseh25/labgears"
            statsIcon="fa fa-history"
            content={
              <div  className="table-full-width" style={{ padding: '30px' }}>
                
                  <StyledText placeholder='I am a placeholder' error='this is an error' />

                <Spinner />
              </div>
            }
          />
        </Col>
      </Row>
    </Grid>
  </div>
));
