import React from 'react';

import {
  Accordion, Row, Col, Card,
} from 'react-bootstrap';

function gameRuleDetails(gamerules) {
  function checkGamemode(type) {
    if (type.name === 'Game Modes') {
      return gameRuleGamemodeBuilder(type.gamemodes);
    }
    return gameRuleDescSeperater(type.text);
  }

  function gameRuleDescSeperater(desc) {
    return desc.map((info, j) => (
      <Card.Body key={info.id}>
        <Card.Text>
          {info.line}
        </Card.Text>
      </Card.Body>
    ));
  }

  function gameRuleGamemodeBuilder(type) {
    return type.map((info, y) => (
      <Col key={info.id} xs={12} md={6} lg={4}>
        <Card>
          <Card.Header>{info.name}</Card.Header>
          {gameRuleDescSeperater(info.text)}
        </Card>
      </Col>
    ));
  }

  return gamerules.map((data, i) => (
    <Card key={data.id} md={{ span: 10, offset: 2 }}>
      <Accordion.Toggle as={Card.Header} eventKey={i}>
        {data.name}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={i}>
        <Card>
          <Row>{checkGamemode(data)}</Row>
        </Card>
      </Accordion.Collapse>
    </Card>
  ));
}

export default { gameRuleDetails };
