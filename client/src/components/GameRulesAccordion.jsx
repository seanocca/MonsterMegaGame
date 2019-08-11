import React, { Component } from 'react';

import { Accordion, Card, Col } from 'react-bootstrap';

class GameRulesAccordion extends Component {
  render() {
    return(
      <Accordion as={Col} md={{span: 8, offset: 2}} className=" justify-content-center text-center">
        <Card>
          <Accordion.Toggle as={Card.Header}  eventKey="0">
            Setup
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Game Modes
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="5">
            Laws of the Game
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            How to Win!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            Attacking and Health Points
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="5">
            Death and Experience
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>);
  }
}

export default GameRulesAccordion;