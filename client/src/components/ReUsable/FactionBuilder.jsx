import React from 'react';

import {
  Accordion, Card, Col, Row,
} from 'react-bootstrap';

function factionBuilder(factions) {
  function factionDescSeperater(desc) {
    return desc.map((info, j) => <Card.Body>{info}</Card.Body>);
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
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={i}>
          {faction.name}
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

  function bannerBuilder(faction, value) {
    return (
      <Col
        md={{ span: 1, order: value }}
        className="d-none d-md-block d-sm-none custom-column-banners"
      >
        <img src={faction.logo} alt={faction.name} className="custom-logo" />
        <img src={faction.banner} alt={faction.name} className="custom-banner" />
      </Col>
    );
  }


  return (
    <Row className="flex-row" style={{ margin: '0' }}>
      {bannerBuilder(factions[0], 1)}
      {bannerBuilder(factions[1], 2)}
      <Col md={{ span: 8, order: 3 }} xs={{ span: 12, order: 1 }}>
        <h1 className="text-center ">FACTIONS</h1>
        <Accordion className="justify-content-center text-center">
          {factionDetails(factions)}
        </Accordion>
      </Col>
      {bannerBuilder(factions[2], 3)}
      {bannerBuilder(factions[3], 4)}
    </Row>
  );
}

export default { factionBuilder };
