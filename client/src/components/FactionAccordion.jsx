/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion, Card, Col } from 'react-bootstrap';
import './Accordion.css';
import './Faction.css';

const mapStateToProps = state => ({
  factions: state.factions,
});

class FactionAccordion extends Component {

  factionDescSeperater = (desc) => (desc.map((info, j) => (
    <Card.Body key={j}>
      {info}
    </Card.Body>
  )))

  factionDetails = () => (this.props.factions.map((faction, i) => (
    <Card className="custom-accordion-card" key={i}>
      <Accordion.Toggle as={Card.Header} eventKey={i} className="custom-accordion">
        {faction.name}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={i} className="justify-content-center">
        <Card key={i + faction.name} className="custom-faction-card">
          <Card.Body>Leader: {faction.leader}</Card.Body>
          <Card.Body>Faculty: {faction.faculty}</Card.Body>
          {this.factionDescSeperater(faction.desc)}
        </Card>
      </Accordion.Collapse>
    </Card>
  )))

  render() {
    return (
      <div>
        <h1 className="text-center custom-title">FACTIONS</h1>
        <Accordion as={Col} md={{ span: 8, offset: 2 }} className="justify-content-center text-center">
          {this.factionDetails()}
        </Accordion>
      </div>
    );
  }
}

export default connect(mapStateToProps)(FactionAccordion);
