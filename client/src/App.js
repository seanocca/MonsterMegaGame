import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Container />
      </Fragment>
    );
  }
}

export default App;
