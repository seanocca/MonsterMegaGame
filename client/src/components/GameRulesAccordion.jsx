/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import {
  Accordion, Card, Col, Row,
} from 'react-bootstrap';

const accordionStyling = {
  padding: '1.5rem 0',
  fontSize: '2.25rem',
  fontWeight: '700',
  backgroundColor: '#01004d',
  color: '#ffc107',
  border: 'none',
  margin: '2rem 0',
  borderRadius: '3px',
};

class GameRulesAccordion extends Component {
  render() {
    return (
      <Accordion as={Col} md={{ span: 8, offset: 2 }} className="justify-content-center text-center" style={{ padding: '2rem 0' }}>
        <Card style={{ border: 'none' }}>
          <Accordion.Toggle as={Card.Header} eventKey="0" style={accordionStyling}>
            Setup
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {'Choose a Monster and Augment to play with.'}
              <br />
              <br />
              {'Any Augment can be used with any Monster.'}
              <br />
              <br />
              {'Each player can only use one monster per game (unless you agree otherwise).'}
              <br />
              <br />
              {'Players can trade augments (or Monsters!) between each other before the game starts.'}
              <br />
              <br />
              {'Players can also bet Augments or Monsters as prizes for winning.'}
              <br />
              <br />
              {'Each player chooses a Faction starting point to start from (see Faction start discs).'}
              <br />
              <br />
              {'Creatures with the highest speed go first. If in doubt, do scissors-paper-rock and play continues clockwise around the board)'}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card style={{ border: 'none' }}>
          <Accordion.Toggle as={Card.Header} eventKey="1" style={accordionStyling}>
            Game Modes
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Header>Rift Swarm</Card.Header>
                  <Card.Text>
                    {'All out war across the campus'}
                    <br />
                    <br />
                    {'Creatures respawn infinitely'}
                    <br />
                    <br />
                    {'First Faction to five kills wins'}
                    <br />
                    <br />
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Header>Tyrant of the Tower</Card.Header>
                  <Card.Text>
                    {'The goal is to capture V Block'}
                    <br />
                    <br />
                    {'The Faction with the last creature/s alien in V block wins the round'}
                    <br />
                    <br />
                    {'Once killed, creatures do not respawn'}
                    <br />
                    <br />
                    {'Best out of three rounds is the overall winner of the Block Capture Battle'}
                    <br />
                    <br />
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Header>Hunt for Humans</Card.Header>
                  <Card.Text>
                    {'Scatter the "Prey" (human) tokens evenly around the map, both inside and outside of buildings (cannot be in the startinng buildings)'}
                    <br />
                    <br />
                    {'Every time your Monster touches Prey, remove the Prey and gain one experience. The gatekeepers "save" them instead, but follow the same rules'}
                    <br />
                    <br />
                    {'The game ends when all Prey is consumed or saved - Faction with the most Prey tokens wins'}
                    <br />
                    <br />
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card style={{ border: 'none' }}>
          <Accordion.Toggle as={Card.Header} eventKey="2" style={accordionStyling}>
            How to Win!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              {'To win, players must accomplish the objective determined by the Game Mode (outlined below). This includes, but is not limited to, eliminating all other opponents, reaching a set number of kills, or completing an agreed upon objective (capture the flag, interrogate the humans, etc.).'}
              <br />
              <br />
              {'The basic game mode for your first game will be one-life elimination-style Deathmatch (good for practice purposes).'}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card style={{ border: 'none' }}>
          <Accordion.Toggle as={Card.Header} eventKey="4" style={accordionStyling}>
            Attacking and Health Points
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              {'Your monster can attack one target at any point of its movement for that turn.'}
              <br />
              <br />
              {'Extra Action augment allows two attacks per turn.'}
              <br />
              <br />
              {"A Monster's DAMAGE is subtracted from the HEALTH POINTS (HP) of the monster it's attacking."}
              <br />
              <br />
              {'The monster token must make physical contact during the move for the attack to hit.'}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card style={{ border: 'none' }}>
          <Accordion.Toggle as={Card.Header} eventKey="5" style={accordionStyling}>
            Death and Experience
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              {'Monsters gain Experience Points by killing other monsters, or from attending one of the weekly Battle for the Block events.'}
              <br />
              <br />
              {'Use these Experience Points to fill in the blank squares on your Monster’s card, in sequence, slowly gaining more damage, speed, leap, and health over time.'}
              <br />
              <br />
              {'Killing a monster or playing in a Battle for the Block earns 2 Experience.'}
              <br />
              <br />
              {'If your Monster runs out of Health Points (HP), then it dies and returns to your Faction’s starting point at the start of your next turn. (EXCEPTION: not in Tyrant of the Block games).'}
              <br />
              <br />
              {'You cannot upgrade a skill twice at one time; when you receive 2 Experience or more, you must spread it around the attributes on your Monster’s card.'}
              <br />
              <br />
              {'If your creature dies, it gains 1 Experience before respawning.'}
              <br />
              <br />
              {'Experience gained from kills immediately improves the creature, and also tops up its health to that new level, but not back to full health.'}
              <br />
              <br />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}

export default GameRulesAccordion;
