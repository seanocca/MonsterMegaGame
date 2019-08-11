import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';

const login = {
  padding: '60px 0',
};

const loginForm = {
  margin: '0 auto',
  maxWidth: '320px',
};

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    // just route to the admin page for now
    event.preventDefault();
  };

  validateForm() {
    const { email, password } = this.state;
    return email.length > 0 && password.length > 0;
  }

  render() {
    const { email, password } = this.state;
    return (
      <div style={login}>
        <form onSubmit={this.handleSubmit} style={loginForm}>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            href="/dashboard"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}
