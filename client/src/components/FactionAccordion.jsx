/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import { Accordion, Card, Col } from 'react-bootstrap';

const accordionStyling = {
  padding: '1.5rem 0',
  fontSize: '3rem',
  fontWeight: '700',
  backgroundImage: 'linear-gradient(#ffffff, #01004d 10%, #01004d 90%, #ffffff)',
  color: '#ffc107',
  border: 'none',
};

class FactionAccordion extends Component {
  render() {
    return (
      <div>
        <Accordion as={Col} md={{ span: 8, offset: 2 }} className="justify-content-center text-center">
          <Card style={{ border: 'none', padding: '2rem 0' }}>
            <Accordion.Toggle as={Card.Header} eventKey="0" style={accordionStyling}>
              Biochrondys
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card style={{ border: 'none', padding: '2rem 0' }}>
            <Accordion.Toggle as={Card.Header} eventKey="1" style={accordionStyling}>
              Gatekeepers
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card style={{ border: 'none', padding: '2rem 0' }}>
            <Accordion.Toggle as={Card.Header} eventKey="2" style={accordionStyling}>
              Mechanica
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card style={{ border: 'none', padding: '2rem 0' }}>
            <Accordion.Toggle as={Card.Header} eventKey="3" style={accordionStyling}>
              Voidborn
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>Body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default FactionAccordion;
