import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";

import Header from "./../components/Header";
import Footer from "./../components/Footer";
import AccEditForm from "./../components/AccEditForm";

class Account extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Container>
          <AccEditForm />
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default Account;
