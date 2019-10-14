import React from 'react';

import {
  Accordion, Card, Col, Row, Image,
} from 'react-bootstrap';

function bestiaryBuilder(beasts) {
  function beastDetails(bestiary) {
    return bestiary.beasts.map((beast, j) => (
      <Col xs={12} md={6} lg={4} key={beast.name} className="custom-accordion-col">
        <Card key={beast.name}>
          <Card.Header>
            {beast.name}
          </Card.Header>
          <Card.Body className="align-text ">
            <i>{beast.desc}</i>
            <br />
            <Image src={beast.image} fluid="false" style={{ maxHeight: '150px' }} alt={beast.name} />
            <Card.Body>
              <p>{beast.move}</p>
              <Row>
                <Col md={6} xs={6}>Leap: {beast.leap}/{beast.maxleap}</Col>
                <Col md={6} xs={6}>HP: {beast.hp}/{beast.maxhp}</Col>
                <Col md={6} xs={6}>Damage: {beast.damage}/{beast.maxdmg}</Col>
                <Col md={6} xs={6}>Speed: {beast.speed}/{beast.maxspeed}</Col>
              </Row>
            </Card.Body>
          </Card.Body>
        </Card>
      </Col>
    ));
  }

  function beastAccordion(beasts) {
    const sorted = beasts.sort((a, b) => a.faction.localeCompare(b.faction));
    return sorted.map((beasts, i) => (
      <Card key={beasts.faction}>
        <Accordion.Toggle as={Card.Header} eventKey={i}>
          <Row>
            <Col md={3} xs={3}>
              <img src={beasts.logo} alt={beasts.faction} className="inline-logos" />
            </Col>
            <Col md={6} xs={6} className="m-auto">
              <h1 className="h1-adjust">{beasts.faction}</h1>
            </Col>
            <Col md={3} xs={3}>
              <img src={beasts.logo} alt={beasts.faction} className="inline-logos" />
            </Col>
          </Row>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={i}>
          <Card>
            <Row>
              {beastDetails(beasts, i)}
            </Row>
          </Card>
        </Accordion.Collapse>
      </Card>
    ));
  }

  return beastAccordion(beasts);
}

export default { bestiaryBuilder };
