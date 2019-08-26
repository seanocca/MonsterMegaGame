/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Accordion, Card, Col, Row,
} from 'react-bootstrap';
import './Accordion.css';
import './Faction.css';

import Biochrondys from '../images/banners/biochrondys.png';
import Gatekeepers from '../images/banners/gatekeepers.png';
import Mechanica from '../images/banners/mechanica.png';
import Voidborn from '../images/banners/voidborn.png';

import BioLogo from '../images/banners/biochrondysLogo.png';
import GatLogo from '../images/banners/gatekeepersLogo.png';
import MecLogo from '../images/banners/mechanicaLogo.png';
import VoiLogo from '../images/banners/voidbornLogo.png';

const mapStateToProps = state => ({
  factions: state.factions,
});

class FactionAccordion extends Component {
  factionDescSeperater = desc => desc.map((info, j) => <Card.Body key={j}>{info}</Card.Body>);

  factionDetails = () => this.props.factions.map((faction, i) => (
    <Card className="custom-accordion-card" key={i}>
      <Accordion.Toggle
        as={Card.Header}
        eventKey={i}
        className="custom-accordion"
      >
        {faction.name}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={i} className="justify-content-center">
        <Card key={faction.name} className="custom-faction-card">
          <Row>
            <Col md={{ span: 2, order: 1 }} className="d-none d-md-block d-sm-none">
              <img
                src={require(`../images/banners/${
                  faction.name.toLowerCase()
                }Logo.png`)}
                alt={faction.name}
                width="100%"
                className="custom-logo"
              />
              <img
                src={require(`../images/banners/${
                  faction.name.toLowerCase()
                }.png`)}
                alt={faction.name}
                width="100%"
                height="100%"
                className="custom-banner"
              />
            </Col>
            <Col md={{ span: 8, order: 2 }} xs={{ span: 12, order: 1 }}>
              <Card.Body>Leader: {faction.leader}</Card.Body>
              <Card.Body>Faculty: {faction.faculty}</Card.Body>
              {this.factionDescSeperater(faction.desc)}
            </Col>
            <Col md={{ span: 2, order: 3 }} className="d-none d-md-block d-sm-none">
              <img
                src={require(`../images/banners/${
                  faction.name.toLowerCase()
                }Logo.png`)}
                alt={faction.name}
                width="100%"
                className="custom-logo"
              />
              <img
                src={require(`../images/banners/${
                  faction.name.toLowerCase()
                }.png`)}
                alt={faction.name}
                width="100%"
                height="100%"
                className="custom-banner"
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
          className="d-none d-md-block d-sm-none"
          style={{ margin: '0', padding: '0px 1%' }}
        >
          <img src={BioLogo} alt="Biochrondys" width="100%" className="custom-logo" />
          <img src={Biochrondys} alt="Biochrondys" height="100%" width="100%" className="custom-banner" />
        </Col>
        <Col
          md={{ span: 1, order: 2 }}
          className="d-none d-md-block d-sm-none"
          style={{ margin: '0', padding: '0px 1%' }}
        >
          <img src={GatLogo} alt="Gatekeepers" width="100%" className="custom-logo" />
          <img src={Gatekeepers} alt="Gatekeepers" height="100%" width="100%" className="custom-banner" />
        </Col>
        <Col md={{ span: 8, order: 3 }} xs={{ span: 12, order: 1 }}>
          <h1 className="text-center custom-title">FACTIONS</h1>
          <Accordion className="justify-content-center text-center">
            {this.factionDetails()}
          </Accordion>
        </Col>
        <Col
          md={{ span: 1, order: 4 }}
          className="d-none d-md-block d-sm-none"
          style={{ margin: '0', padding: '0px 1%' }}
        >
          <img src={MecLogo} alt="Mechanica" width="100%" className="custom-logo" />
          <img src={Mechanica} alt="Mechanica" height="100%" width="100%" className="custom-banner" />
        </Col>
        <Col
          md={{ span: 1, order: 5 }}
          className="d-none d-md-block d-sm-none"
          style={{ margin: '0', padding: '0px 1%' }}
        >
          <img src={VoiLogo} alt="Voidborn" width="100%" className="custom-logo" />
          <img src={Voidborn} alt="Voidborn" height="100%" width="100%" className="custom-banner" />
        </Col>
      </Row>
    );
  }
}

export default connect(mapStateToProps)(FactionAccordion);
