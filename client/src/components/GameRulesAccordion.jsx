/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion, Card, Col, Row } from 'react-bootstrap';
import './Accordion.css';
import './Faction.css';

const mapStateToProps = (state) => ({
  gamerules: state.gamerules,
});

class GameRulesAccordion extends Component {
  gameRuleDescSeperater = (desc) =>
    desc.map((info, j) => (
      <Card.Body key={j}>
        {info} <br />
      </Card.Body>
    ));

  gameRuleGamemodeBuilder = (type) =>
    type.map((info, y) => (
      <Col xs={12} md={6} lg={4} key={y} className="custom-gamemode-column">
        <Card className="custom-game-rule-card" key={y}>
          <Card.Header>{info.name}</Card.Header>
          {this.gameRuleDescSeperater(info.text)}
        </Card>
      </Col>
    ));

  checkGamemode = (type) => {
    if (type.name === 'Game Modes') {
      return this.gameRuleGamemodeBuilder(type.gamemodes);
    } else {
      return this.gameRuleDescSeperater(type.text);
    }
  };

  gameRuleDetails = () =>
    this.props.gamerules.map((data, i) => (
      <Card key={i} className="custom-accordion-card">
        <Accordion.Toggle
          as={Card.Header}
          eventKey={i}
          className="custom-accordion"
        >
          {data.name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={i}>
          <Card className="custom-faction-card">
            <Row>{this.checkGamemode(data)}</Row>
          </Card>
        </Accordion.Collapse>
      </Card>
    ));

  render() {
    return (
      <div>
        <h1 className="text-center custom-title">GAME RULES</h1>
        <Accordion
          as={Col}
          md={{ span: 8, offset: 2 }}
          className="justify-content-center text-center"
        >
          {this.gameRuleDetails()}
        </Accordion>
      </div>
    );
  }
}

export default connect(mapStateToProps)(GameRulesAccordion);
