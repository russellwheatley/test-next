import React from 'react';
import { connect } from 'react-redux';

import styles from './styles.less';

import Card from '../../../layout/Card';
import Container from '../../../layout/Container';

function Meta({ title }) {
  return (
    <Container>
      <Card>
        <h1>{title}</h1>
        <p></p>
      </Card>
    </Container>
  );
}

function mapStateToProps({ query }) {
  return {
    title: query.title,
  };
}

export default connect(mapStateToProps)(Meta);
