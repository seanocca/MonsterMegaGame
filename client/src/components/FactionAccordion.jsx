/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion, Card, Col, Row } from 'react-bootstrap';
import './Accordion.css';
import './Faction.css';

import Biochrondys from '../images/banners/biochrondys.png';
import Gatekeepers from '../images/banners/gatekeepers.png';
import Mechanica from '../images/banners/mechanica.png';
import Voidborn from '../images/banners/voidborn.png';

const mapStateToProps = (state) => ({
  factions: state.factions,
});

class FactionAccordion extends Component {
  factionDescSeperater = (desc) =>
    desc.map((info, j) => <Card.Body key={j}>{info}</Card.Body>);

  factionDetails = () =>
    this.props.factions.map((faction, i) => (
      <Card className="custom-accordion-card" key={i}>
        <Accordion.Toggle
          as={Card.Header}
          eventKey={i}
          className="custom-accordion"
        >
          {faction.name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={i} className="justify-content-center">
          <Card key={i + faction.name} className="custom-faction-card">
            <Row>
              <Col md={{ span: 2, order: 1 }} xs={{ span: 6, order: 2 }}>
                <img
                  src={require('../images/banners/' +
                    faction.name.toLowerCase() +
                    '.png')}
                  alt={faction.name}
                  width="100px"
                  height="100%"
                />
              </Col>
              <Col md={{ span: 8, order: 2 }} xs={{ span: 12, order: 1 }}>
                <Card.Body>Leader: {faction.leader}</Card.Body>
                <Card.Body>Faculty: {faction.faculty}</Card.Body>
                {this.factionDescSeperater(faction.desc)}
              </Col>
              <Col md={{ span: 2, order: 3 }} xs={{ span: 6, order: 3 }}>
                <img
                  src={require('../images/banners/' +
                    faction.name.toLowerCase() +
                    '.png')}
                  alt={faction.name}
                  width="100px"
                  height="100%"
                />
              </Col>
            </Row>
          </Card>
        </Accordion.Collapse>
      </Card>
    ));

  render() {
    return (
      <Row className="flex-row" style={{ margin: '0' }}>
        <Col
          md={{ span: 1, order: 1 }}
          xs={{ span: 3, order: 3 }}
          style={{ margin: '0' }}
        >
          <img src={Biochrondys} alt="Biochrondys" height="100%" width="100%" />
        </Col>
        <Col
          md={{ span: 1, order: 2 }}
          xs={{ span: 3, order: 3 }}
          style={{ margin: '0' }}
        >
          <img src={Gatekeepers} alt="Gatekeepers" height="100%" width="100%" />
        </Col>
        <Col md={{ span: 8, order: 3 }} xs={{ span: 12, order: 1 }}>
          <h1 className="text-center custom-title">FACTIONS</h1>
          <Accordion className="justify-content-center text-center">
            {this.factionDetails()}
          </Accordion>
        </Col>
        <Col
          md={{ span: 1, order: 4 }}
          xs={{ span: 3, order: 3 }}
          style={{ margin: '0' }}
        >
          <img src={Mechanica} alt="Mechanica" height="100%" width="100%" />
        </Col>
        <Col
          md={{ span: 1, order: 5 }}
          xs={{ span: 3, order: 3 }}
          style={{ margin: '0' }}
        >
          <img src={Voidborn} alt="Voidborn" height="100%" width="100%" />
        </Col>
      </Row>
    );
  }
}

export default connect(mapStateToProps)(FactionAccordion);
