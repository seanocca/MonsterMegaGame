import React from 'react';

import {
  Accordion, Card, Col, Row,
} from 'react-bootstrap';

function factionBuilder(factions) {
  function factionDescSeperater(desc) {
    return desc.map((info, j) => <Card.Body key={info.id}>{info.line}</Card.Body>);
  }

  function factionBannerLogo(logo, banner, name, value) {
    return (
      <Col md={{ span: 2, order: value }} className="d-none d-md-block d-sm-none">
        <img
          src={logo}
          alt={name}
          className="custom-logo"
        />
        <img
          src={banner}
          alt={name}
          className="custom-banner"
        />
      </Col>
    );
  }

  function factionDetails(factions) {
    return factions.map((faction, i) => (
      <Card key={faction.id}>
        <Accordion.Toggle as={Card.Header} eventKey={i}>
          <Row>
            <Col md={3} xs={3}>
              <img src={faction.logo} alt={faction.name} className="inline-logos" />
            </Col>
            <Col md={6} xs={6} className="m-auto">
              <h1 className="h1-adjust">{faction.name}</h1>
            </Col>
            <Col md={3} xs={3}>
              <img src={faction.logo} alt={faction.name} className="inline-logos" />
            </Col>
          </Row>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={i} className="justify-content-center">
          <Card key={faction.name}>
            <Row>
              {factionBannerLogo(faction.logo, faction.banner, faction.name, 1)}
              <Col md={{ span: 8, order: 1 }} xs={{ span: 12, order: 1 }}>
                <Card.Body>Leader: {faction.leader}</Card.Body>
                <Card.Body>Faculty: {faction.faculty}</Card.Body>
                {factionDescSeperater(faction.desc)}
              </Col>
              {factionBannerLogo(faction.logo, faction.banner, faction.name, 3)}
            </Row>
          </Card>
        </Accordion.Collapse>
      </Card>
    ));
  }

  return factionDetails(factions);
}

export default { factionBuilder };
