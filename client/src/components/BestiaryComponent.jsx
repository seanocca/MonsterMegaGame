/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion, Card, Col, Row } from 'react-bootstrap';
import './Accordion.css';
import Clamberer from '../images/monsters/clamberer-white.png';

const mapStateToProps = state => ({
  beasts: state.beasts,
  augments: state.augments,
});

class BestiaryAccordion extends Component {

  beastDetails = (faction) => (this.props.beasts[faction].beasts.map((beast, j) => (
    <Col xs={12} md={6} lg={4} key={j}>
      <Card key={j} className="custom-beast-card">
        <Card.Header>
          {beast.name}
        </Card.Header>
        <Card.Body className="align-text ">
          <i>{beast.desc}</i>
          <br />
          <img src={Clamberer} width="100" height="150" alt={beast.name}/>
        </Card.Body>
      </Card>
    </Col>
  )))

  factionAccordion = () => (this.props.beasts.map((beasts, i) => (
    <Card className="custom-accordion-card" key={i}>
      <Accordion.Toggle as={Card.Header} eventKey={i} className="custom-accordion">
        {beasts.faction}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={i}>
        <Card.Body>
          <Row>
            {this.beastDetails(i)}
          </Row>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  )))

  render() {
    console.log(this.props.beasts[0].beasts);
    return (
      <div>
        <Accordion as={Col} md={{ span: 8, offset: 2 }} className="justify-content-center text-center">
          {this.factionAccordion()}
        </Accordion>
      </div>
    );
  }
}

export default connect(mapStateToProps)(BestiaryAccordion);
