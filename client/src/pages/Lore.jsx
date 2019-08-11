import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

class Lore extends Component {
  render() {
    return(
      <Container style={{ padding: '4rem 0' }}>
        <Row>
          <Col>
            <Card>
              <Card.Header>Overview</Card.Header>
              <Card.Body>
                <Card.Text>
                  Info, info, info, info
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
          <Card>
            <Card.Header>The Rift</Card.Header>
            <Card.Body>
              <Card.Text>
                Info, info, info, info
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="outline-dark" size="lg" block>
              Factions
            </Button>
          </Col>
          <Col>
            <Button variant="outline-dark" size="lg" block>
              Bestiary
            </Button>
          </Col>
        </Row>
      </Container>);
  }
}

export default Lore;