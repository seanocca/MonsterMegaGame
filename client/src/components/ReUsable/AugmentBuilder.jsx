import React from 'react';

import {
  Accordion, Card, Col, Row, Image,
} from 'react-bootstrap';

function augmentsBuilder(augments) {
  function augmentDetails(augments) {
    return augments.augments.map((augment, j) => (
      <Col xs={12} md={6} lg={4} key={augment.name} className="custom-accordion-col">
        <Card key={augment.name}>
          <Card.Header>
            {augment.name}
          </Card.Header>
          <Card.Body className="align-text ">
            <i>{augment.type}</i>
            <br />
            <Image src={augment.image} fluid="false" alt={augment.name} />
            <Card.Body>
              <p>{augment.action}</p>
              <p>{augment.desc}</p>
            </Card.Body>
          </Card.Body>
        </Card>
      </Col>
    ));
  }

  function augmentAccordion(augments) {
    return augments.map((augment, i) => (
      <Card key={augment.faction}>
        <Accordion.Toggle as={Card.Header} eventKey={i}>
          <Row>
            <Col md={3} xs={3}>
              <img src={augment.logo} alt={augment.faction} className="inline-logos" />
            </Col>
            <Col md={6} xs={6} className="m-auto">
              <h1 className="h1-adjust">{augment.faction}</h1>
            </Col>
            <Col md={3} xs={3}>
              <img src={augment.logo} alt={augment.faction} className="inline-logos" />
            </Col>
          </Row>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={i}>
          <Card>
            <Row>
              {augmentDetails(augment, i)}
            </Row>
          </Card>
        </Accordion.Collapse>
      </Card>
    ));
  }

  return augmentAccordion(augments);
}

export default { augmentsBuilder };
