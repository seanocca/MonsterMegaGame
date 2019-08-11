import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import GRAccordion from "./../components/GameRulesAccordion";

class GameRules extends Component {
  render() {
    return(
      <Container style={{ padding: '4rem 0' }}>
        <GRAccordion />
      </Container>);
  }
}

export default GameRules;