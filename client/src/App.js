import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Container />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
