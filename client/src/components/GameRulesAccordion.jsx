/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Accordion, Card, Col, Row,
} from 'react-bootstrap';
import './Accordion.css'
import './Faction.css';

const mapStateToProps = state => ({
  gamerules: state.gamerules,
});

class GameRulesAccordion extends Component {

  gameRuleDescSeperater = (desc) => (desc.map((info, j) => (
    <Card.Body key={j}>
      {info} <br />
    </Card.Body>
  )))

  gameRuleGamemodeBuilder = (type) => (type.map((info, y) =>(
      <Col xs={12} md={6} lg={4} className="custom-gamemode-column">
        <Card className="custom-game-rule-card" key={y}>
          <Card.Header>{info.name}</Card.Header>
            {this.gameRuleDescSeperater(info.text)}
        </Card>
      </Col>
  )))

  checkGamemode = (type) => {
    if (type.name === "Game Modes"){
      return(this.gameRuleGamemodeBuilder(type.gamemodes))
    } else {
      return(this.gameRuleDescSeperater(type.text))
    }
  }

  gameRuleDetails = () => (this.props.gamerules.map((data, i) => (
    <Card className="custom-accordion-card">
      <Accordion.Toggle as={Card.Header} eventKey={i} className="custom-accordion">
        {data.name}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={i}>
        <Card className="custom-faction-card">
          <Row>
            {this.checkGamemode(data)}
          </Row>
        </Card>
      </Accordion.Collapse>
    </Card>
  )))

  render() {
    return (
      <div>
        <h1 className="text-center custom-title">GAME RULES</h1>
        <Accordion as={Col} md={{ span: 8, offset: 2 }} className="justify-content-center text-center">
          {this.gameRuleDetails()}
        </Accordion>
      </div>
    );
  }
}

export default connect(mapStateToProps)(GameRulesAccordion);


  // <Card.Body>
  //   <Row>
  //     <Col xs={12} md={6} lg={4}>
  //       <Card className="custom-game-rule-card">
  //         <Card.Header>Rift Swarm</Card.Header>
  //         <Card.Body >
  //           <span>All out war across the campus</span>
  //           <span>Creatures respawn infinitely</span>
  //           <span>First Faction to five kills wins</span>
  //         </Card.Body>
  //       </Card>
  //     </Col>
  //     <Col xs={12} md={6} lg={4}>
  //       <Card className="custom-game-rule-card">
  //         <Card.Header>Tyrant of the Tower</Card.Header>
  //         <Card.Text  >
  //           <span>The goal is to capture V Block</span>
  //           <span>The Faction with the last creature/s alien in V block wins the round</span>
  //           <span>Once killed, creatures do not respawn</span>
  //           <span>Best out of three rounds is the overall winner of the Block Capture Battle</span>
  //         </Card.Text>
  //       </Card>
  //     </Col>
  //     <Col xs={12} md={12} lg={4}>
  //       <Card className="custom-game-rule-card">
  //         <Card.Header>Hunt for Humans</Card.Header>
  //         <Card.Text >
  //           <span>Scatter the "Prey" (human) tokens evenly around the map, both inside and outside of buildings (cannot be in the startinng buildings)</span>
  //           <span>Every time your Monster touches Prey, remove the Prey and gain one experience. The gatekeepers "save" them instead, but follow the same rules</span>
  //           <span>The game ends when all Prey is consumed or saved - Faction with the most Prey tokens wins</span>
  //         </Card.Text>
  //       </Card>
  //     </Col>
  //   </Row>
  // </Card.Body>