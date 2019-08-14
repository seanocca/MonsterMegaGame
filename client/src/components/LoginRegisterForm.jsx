/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Form, Button, Card, Row, Col, Tabs, Tab,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Auth } from 'aws-amplify';
import { userHasAuthenticated, isAuthenticating } from '../store/actions';

const mapDispatchToProps = dispatch => ({
  userHasAuthenticated: auth => dispatch(userHasAuthenticated(auth)),
  isAuthenticating: status => dispatch(isAuthenticating(status)),
});

class LoginRegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logInEmail: '',
      logInPassword: '',
      signUpEmail: '',
      signUpPassword: '',
      signUpConfirm: '',
    };
  }

  validateLogInForm = () => {
    const { logInEmail, logInPassword } = this.state;
    return logInEmail.length > 0 && logInPassword.length > 0;
  }

  validateSignUpForm = () => {
    const { signUpEmail, signUpPassword, signUpConfirm } = this.state;
    return signUpEmail.length > 0 && signUpPassword.length > 0 && signUpPassword === signUpConfirm;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleLogInSubmit = async (event) => {
    event.preventDefault();
    const { logInEmail, logInPassword } = this.state;
    this.props.isAuthenticating(true);

    try {
      await Auth.signIn(logInEmail, logInPassword)
        .then((res) => {
          this.props.userHasAuthenticated(true);
          this.props.history.push('/account');
        });
    } catch (e) {
      // TODO: Use a modal instead of a alert box
      // eslint-disable-next-line no-alert
      alert(e.message);
    }
  }

  LogForm = () => (
    <Form onSubmit={this.handleLogInSubmit}>
      <Form.Group controlId="logInEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          autoFocus
          type="email"
          placeholder="Enter email"
          value={this.state.logInEmail}
          onChange={this.handleChange}
        />
      </Form.Group>
      <Form.Group controlId="logInPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={this.state.logInPassword}
          onChange={this.handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formBasicChecbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" id="loginSubmit" disabled={!this.validateLogInForm()} type="submit">
        Login
      </Button>
    </Form>
  );

  SignUpForm = () => (
    <Form onSubmit={this.handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridFirsName">
          <Form.Label>First Name</Form.Label>
          <Form.Control placeholder="First Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control placeholder="Last Name" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="signUpEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            placeholder="Enter email"
            value={this.state.signUpEmail}
            onChange={this.handleChange}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="signUpPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={this.state.signUpPassword}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="signUpConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={this.state.signUpConfirm}
            onChange={this.handleChange}
          />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control as="select">
            <option>Choose...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form.Row>
      <Form.Row className="justify-content-center">
        <Button variant="primary" disabled={!this.validateSignUpForm()} type="submit">
          Submit
        </Button>
      </Form.Row>
    </Form>
  );

  render() {
    return (
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
            <Tab eventKey="login" title="Login">
              <Card>
                <Card.Body>{this.LogForm()}</Card.Body>
              </Card>
            </Tab>
            <Tab eventKey="signUp" title="Sign Up">
              <Card>
                <Card.Body>{this.SignUpForm()}</Card.Body>
              </Card>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(LoginRegisterForm));
