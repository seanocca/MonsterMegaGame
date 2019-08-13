/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import FactionAccordion from '../components/FactionAccordion';

class Factions extends Component {
  render() {
    return (
      <Container style={{ padding: '4rem 0' }}>
        <FactionAccordion />
      </Container>
    );
  }
}

export default Factions;
