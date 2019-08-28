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
    console.log('GameRuleDescSeperator', desc);
    return desc.map((info, j) => (
      <Card.Body key={j}>
        <Card.Text>
          {info}
        </Card.Text>
      </Card.Body>
    ));
  }

  function gameRuleGamemodeBuilder(type) {
    console.log('GameRuleGameModeBuilder', type);
    return type.map((info, y) => (
      <Col xs={12} md={6} lg={4} key={y}>
        <Card key={y}>
          <Card.Header>{info.name}</Card.Header>
          {gameRuleDescSeperater(info.text)}
        </Card>
      </Col>
    ));
  }

  console.log('GameRuleDetails', gamerules);
  return gamerules.map((data, i) => (
    <Card key={i}>
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
