import React from 'react';

import {
  Accordion, Card, Col, Row,
} from 'react-bootstrap';

function bestiaryBuilder(beasts) {
  function beastDetails(bestiary) {
    return bestiary.beasts.map((beast, j) => (
      <Col xs={12} md={6} lg={4} key={beast.name}>
        <Card key={beast.name}>
          <Card.Header>
            {beast.name}
          </Card.Header>
          <Card.Body className="align-text ">
            <i>{beast.desc}</i>
            <br />
            <img src={beast.img} width="100" height="150" alt={beast.name} />
          </Card.Body>
        </Card>
      </Col>
    ));
  }

  function factionAccordion(beasts) {
    return beasts.map((beasts, i) => (
      <Card key={beasts.faction}>
        <Accordion.Toggle as={Card.Header} eventKey={i}>
          {beasts.faction}
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

  return (
    <div>
      <h1 className="text-center">BESTIARY</h1>
      <Accordion as={Col} md={{ span: 8, offset: 2 }} className="justify-content-center text-center">
        {factionAccordion(beasts)}
      </Accordion>
    </div>
  );
}

export default { bestiaryBuilder };
