import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import LoreInfo from '../components/LoreInfo';

class Lore extends Component {
  render() {
    return(
      <Container style={{ padding: '4rem 0' }}>
        <LoreInfo />
      </Container>);
  }
}

export default Lore;