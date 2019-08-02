import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";

import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Forms from '../components/LoginRegisterForm';

class Login extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Container style={{padding: '4rem 0'}}>
                    <Forms />
                </Container>
                <Footer />
            </Fragment>
        );
    }
}

export default Login;