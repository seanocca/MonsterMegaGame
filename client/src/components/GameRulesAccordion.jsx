/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Accordion, Card, Col, Row,
} from 'react-bootstrap';
import './Accordion.css'


class GameRulesAccordion extends Component {
  render() {
    return (
      <Accordion as={Col} md={{ span: 8, offset: 2 }} className="justify-content-center text-center">
        <Card className="custom-accordion-card">
          <Accordion.Toggle as={Card.Header} eventKey="0" className="custom-accordion">
            Setup
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <span>Choose a Monster and Augment to play with.</span>
              <span>Any Augment can be used with any Monster.</span>
              <span>Each player can only use one monster per game (unless you agree otherwise).</span>
              <span>Players can trade augments (or Monsters!) between each other before the game starts.</span>
              <span>Players can also bet Augments or Monsters as prizes for winning.</span>
              <span>Each player chooses a Faction starting point to start from (see Faction start discs).</span>
              <span>Creatures with the highest speed go first. If in doubt, do scissors-paper-rock and play continues clockwise around the board)</span>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="custom-accordion-card">
          <Accordion.Toggle as={Card.Header} eventKey="1" className="custom-accordion">
            Game Modes
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Row>
                <Col xs={12} md={6} lg={4}>
                  <Card className="custom-game-rule-card">
                    <Card.Header>Rift Swarm</Card.Header>
                    <Card.Body >
                      <span>All out war across the campus</span>
                      <span>Creatures respawn infinitely</span>
                      <span>First Faction to five kills wins</span>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <Card className="custom-game-rule-card">
                    <Card.Header>Tyrant of the Tower</Card.Header>
                    <Card.Text  >
                      <span>The goal is to capture V Block</span>
                      <span>The Faction with the last creature/s alien in V block wins the round</span>
                      <span>Once killed, creatures do not respawn</span>
                      <span>Best out of three rounds is the overall winner of the Block Capture Battle</span>
                    </Card.Text>
                  </Card>
                </Col>
                <Col xs={12} md={12} lg={4}>
                  <Card className="custom-game-rule-card">
                    <Card.Header>Hunt for Humans</Card.Header>
                    <Card.Text >
                      <span>Scatter the "Prey" (human) tokens evenly around the map, both inside and outside of buildings (cannot be in the startinng buildings)</span>
                      <span>Every time your Monster touches Prey, remove the Prey and gain one experience. The gatekeepers "save" them instead, but follow the same rules</span>
                      <span>The game ends when all Prey is consumed or saved - Faction with the most Prey tokens wins</span>
                    </Card.Text>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="custom-accordion-card">
          <Accordion.Toggle as={Card.Header} eventKey="2" className="custom-accordion">
            How to Win!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <span>To win, players must accomplish the objective determined by the Game Mode (outlined below). This includes, but is not limited to, eliminating all other opponents, reaching a set number of kills, or completing an agreed upon objective (capture the flag, interrogate the humans, etc.).</span>
              <span>The basic game mode for your first game will be one-life elimination-style Deathmatch (good for practice purposes).</span>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="custom-accordion-card">
          <Accordion.Toggle as={Card.Header} eventKey="4" className="custom-accordion">
            Attacking and Health Points
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <span>Your monster can attack one target at any point of its movement for that turn.</span>
              <span>Extra Action augment allows two attacks per turn.</span>
              <span>A Monster's DAMAGE is subtracted from the HEALTH POINTS (HP) of the monster it's attacking.</span>
              <span>The monster token must make physical contact during the move for the attack to hit.</span>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="custom-accordion-card">
          <Accordion.Toggle as={Card.Header} eventKey="5" className="custom-accordion">
            Death and Experience
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              <span>Monsters gain Experience Points by killing other monsters, or from attending one of the weekly Battle for the Block events.</span>
              <span>Use these Experience Points to fill in the blank squares on your Monster’s card, in sequence, slowly gaining more damage, speed, leap, and health over time.</span>
              <span>Killing a monster or playing in a Battle for the Block earns 2 Experience.</span>
              <span>If your Monster runs out of Health Points (HP), then it dies and returns to your Faction’s starting point at the start of your next turn. (EXCEPTION: not in Tyrant of the Block games).</span>
              <span>You cannot upgrade a skill twice at one time; when you receive 2 Experience or more, you must spread it around the attributes on your Monster’s card.</span>
              <span>If your creature dies, it gains 1 Experience before respawning.</span>
              <span>Experience gained from kills immediately improves the creature, and also tops up its health to that new level, but not back to full health.</span>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}

export default GameRulesAccordion;
