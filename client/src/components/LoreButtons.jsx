import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function LoreButton() {
  return (
    <Row>
      <Col lg={6} xs={12}>
        <LinkContainer to="/factions">
          <Button className="custom-lore-button">
            <span>Factions</span>
          </Button>
        </LinkContainer>
      </Col>
      <Col lg={6} xs={12}>
        <LinkContainer to="/bestiary">
          <Button className="custom-lore-button">
            <span>Bestiary</span>
          </Button>
        </LinkContainer>
      </Col>
    </Row>
  );
}

export default LoreButton;
