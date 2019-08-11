import React, { Component } from "react";
import { Container } from "react-bootstrap";

import Game from "../components/Game";

class Home extends Component {
  render() {
    return (
      <Container style={{padding: "4rem 0", flex: "1 0 auto"}}>
        <Game />
      </Container>
    );
  }
}

export default Home;
