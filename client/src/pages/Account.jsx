import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Header from "./../components/Header";
import Footer from "./../components/Footer";
import AccEditForm from "./../components/AccEditForm";
import FactionEdit from "./../components/FactionEdit";

class Account extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Container style={{padding: '2rem'}}>
          <Row>
            <Col md={6}>
              <AccEditForm />
            </Col>
            <Col md={6}>
              <FactionEdit />
            </Col>
          </Row>
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default Account;
