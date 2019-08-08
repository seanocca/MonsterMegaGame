import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import Accordion from "./../components/GameRulesAccordion";

class GameRules extends Component {
  render() {
    return(
      <Container style={{ padding: '4rem 0' }}>
        <Accordion />
      </Container>);
  }
}

export default GameRules;