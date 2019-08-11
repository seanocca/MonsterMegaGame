import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import Forms from '../components/LoginRegisterForm';

class Login extends Component {
  render() {
    return (
      <Container style={{ padding: '4rem 0' }}>
        <Forms />
      </Container>
    );
  }
}

export default Login;
