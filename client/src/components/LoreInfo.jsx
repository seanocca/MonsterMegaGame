import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Row, Col, Card, Button,
} from 'react-bootstrap';
import './Lore.css';
import './Text.css';

const mapStateToProps = state => ({
  overview: state.overview,
  rift: state.rift,
});

class LoreInfo extends Component {
  overviewData = () => (this.props.overview.map((info, i) => (
    <Card.Body key={i}>
      {info}
    </Card.Body>
  )))

  riftData = () => (this.props.rift.map((info, j) => (
    <Card.Body key={j}>
      {info}
    </Card.Body>
  )))

  render() {
    return (
      <div>
        <h1 className="text-center custom-title">LORE</h1>
        <Row>
          <Col>
            <Card className="text-center custom-lore-card">
              <Card.Header>Overview</Card.Header>
              {this.overviewData()}
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="text-center custom-lore-card">
              <Card.Header>The Rift</Card.Header>
              {this.riftData()}
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={6} xs={12}>
            <LinkContainer to="/factions">
              <Button className="custom-lore-button" block>
                <span>Factions</span>
              </Button>
            </LinkContainer>
          </Col>
          <Col lg={6} xs={12}>
            <LinkContainer to="/bestiary">
              <Button className="custom-lore-button" block>
                <span>Bestiary</span>
              </Button>
            </LinkContainer>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(mapStateToProps)(LoreInfo);
