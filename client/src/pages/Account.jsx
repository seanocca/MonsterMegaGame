import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import AccEditForm from "../components/AccountEditForm";
import FactionEdit from "./../components/FactionEdit";

class Account extends Component {
  render() {
    return (
      <Container style={{padding: '4rem 0'}}>
        <Row>
          <Col md={6}>
            <AccEditForm />
          </Col>
          <Col md={6}>
            <FactionEdit />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Account;
