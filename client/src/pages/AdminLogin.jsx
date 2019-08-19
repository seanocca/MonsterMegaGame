// change to Login.jsx in future
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form } from 'react-bootstrap';

import { useFormInput } from '../helpers/hooks';

const Login = ({ history }) => {
  const email = useFormInput('');
  const password = useFormInput('');

  const handleSubmit = (event) => {
    // just route to a dashboard page
    event.preventDefault();
    history.push('/dashboard/users');
  };

  return (
    <Form>
      <Form.Group controlId="email" bsSize="large">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email address"
          autoFocus
          {...email}
        />
      </Form.Group>
      <Form.Group controlId="password" bsSize="large">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          {...password}
        />
      </Form.Group>
      <button type="button" onClick={handleSubmit}>Login</button>
    </Form>
  );
};

export default withRouter(Login);
