import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";

import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Game from "./../components/Game";

class Home extends Component {
    render(){
        return (
        <Fragment>
            <Header />
            <Container>
                <Game />
            </Container>
            <Footer />
        </Fragment>
      );
    }
}

export default Home;