import React from 'react';
import { Container } from 'react-bootstrap';

import LoginRegisterForm from '../components/LoginRegisterForm';

const Login = () => (
  <Container style={{ padding: '4rem 0' }}>
    <LoginRegisterForm />
  </Container>
);

export default Login;
