import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, Button } from 'react-bootstrap';
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
    return(
      <div>
        <h1 className="text-center custom-title">LORE</h1>
        <Row>
          <Col>
            <Card className="text-center custom-lore-card" >
              <Card.Header>Overview</Card.Header>
                {this.overviewData()}
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
          <Card className="text-center custom-lore-card" >
            <Card.Header>The Rift</Card.Header>
                {this.riftData()}
          </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={6} xs={12}>
            <Button className="custom-lore-button" block href="/factions">
              <span>Factions</span>
            </Button>
          </Col>
          <Col lg={6} xs={12}>
            <Button className="custom-lore-button" block href="/bestiary">
              <span>Bestiary</span>
            </Button>
          </Col>
        </Row>
      </div>);
  }
}

export default connect(mapStateToProps)(LoreInfo);