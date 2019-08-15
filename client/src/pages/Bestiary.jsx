import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import BestiaryAccordion from '../components/BestiaryComponent'

class Bestiary extends Component {
  render() {
    return(
      <Container style={{ padding: '4rem 0' }}>
        <BestiaryAccordion />
      </Container>);
  }
}

export default Bestiary;