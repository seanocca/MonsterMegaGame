/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion, Card, Col } from 'react-bootstrap';
import './Accordion.css';

const mapStateToProps = state => ({
  factions: state.factions,
});

class FactionAccordion extends Component {
  factionDetails = () => (this.props.factions.map((faction, i) => (
    <Card className="custom-accordion-card" key={i}>
      <Accordion.Toggle as={Card.Header} eventKey={i} className="custom-accordion">
        {faction.name}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={i}>
        <Card.Body>{faction.desc}</Card.Body>
      </Accordion.Collapse>
    </Card>
  )))

  render() {
    return (
      <div>
        <Accordion as={Col} md={{ span: 8, offset: 2 }} className="justify-content-center text-center">
          {this.factionDetails()}
        </Accordion>
      </div>
    );
  }
}

export default connect(mapStateToProps)(FactionAccordion);
