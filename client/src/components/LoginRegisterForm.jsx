/* eslint-disable react/destructuring-assignment */
import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Form, Button, Card, Row, Col, Tabs, Tab,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Auth } from 'aws-amplify';
import LoaderButton from './LoaderButton';
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
      signUpFirsName: '',
      signUpLastName: '',
      signUpAddress: '',
      signUpCity: '',
      signUpPostcode: '',
      signUpState: '',
      newUser: null,
      isLoading: false,
      confirmationCode: 0,
    };
  }

  onChangeSelectState = (event) => this.setState({ signUpState: event.target.value });

  validateLogInForm = () => {
    const { logInEmail, logInPassword } = this.state;
    return logInEmail.length > 0 && logInPassword.length > 0;
  }

  validateSignUpForm = () => {
    const { signUpEmail, signUpPassword, signUpConfirm } = this.state;
    return signUpEmail.length > 0 && signUpPassword.length > 0 && signUpPassword === signUpConfirm;
  }

  validateConfirmationForm = () => {
    const { confirmationCode } = this.state;
    return confirmationCode.length > 0;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSignUpSubmit = async (event) => {
    event.preventDefault();

    this.setState({ isLoading: true });
    
    try {
      const newUser = await Auth.signUp({
        username: this.state.signUpEmail,
        password: this.state.signUpPassword
      });
      this.setState({
        newUser
      });
    } catch (e) {
      alert(e.message);
    }

    this.setState({ isLoading: false });
  }

  handleConfirmationSubmit = async (event) => {
    event.preventDefault();

    this.setState({ isLoading: true });
  }

  handleLogInSubmit = async (event) => {
    event.preventDefault();
    const { logInEmail, logInPassword } = this.state;
    this.props.isAuthenticating(true);
    this.setState({ isLoading: true });

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
      this.setState({ isLoading: false });
    }
  }

  renderConfirmationForm = () => (
    <Form onSubmit={this.handleConfirmationSubmit}>
      <Form.Group controlId="confirmationCode">
        <Form.Label>Confirmation Code</Form.Label>
        <Form.Control
          autoFocus
          type="tel"
          value={this.state.confirmationCode}
          onChange={this.handleChange}
        />
        <Form.Text className="text-muted">Please check your email for the code.</Form.Text>
      </Form.Group>
      <LoaderButton
        block
        disabled={!this.validateConfirmationForm()}
        type="submit"
        isLoading={this.state.isLoading}
        text="Verify"
        loadingText="Verifying…"
      />
    </Form>
  )

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
      <LoaderButton
        block
        variant="primary"
        disabled={!this.validateLogInForm()}
        type="submit"
        isLoading={this.state.isLoading}
        text="Login"
        loadingText="Logging in…"
      />
    </Form>
  );

  SignUpForm = () => (
    <Form onSubmit={this.handleSignUpSubmit}>
      <Form.Row>
        <Form.Group as={Col} controlId="signUpFirsName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            autoFocus
            placeholder="First Name"
            value={this.state.signUpFirsName}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="signUpLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            placeholder="Last Name"
            value={this.state.signUpLastName}
            onChange={this.handleChange}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="signUpEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
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

      <Form.Group controlId="signUpAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          placeholder="Address"
          value={this.state.signUpAddress}
          onChange={this.handleChange}
        />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="signUpCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            placeholder="City"
            value={this.state.signUpCity}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="signUpState">
          <Form.Label>State</Form.Label>
          <Form.Control
            as="select"
            onChange={this.onChangeSelectState}
            ref={select => { this.select = select }}
          >
            <option value=''>Choose...</option>
            <option value='QLD'>QLD</option>
            <option value='NSW'>NSW</option>
            <option value='VIC'>VIC</option>
            <option value='NT'>NT</option>
            <option value='SA'>SA</option>
            <option value='WA'>WA</option>
            <option value='ACT'>ACT</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="signUpPostcode">
          <Form.Label>Post Code</Form.Label>
          <Form.Control
            placeholder="Post Code"
            value={this.state.signUpPostcode}
            onChange={this.handleChange}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row className="justify-content-center">
        <Button
          block
          variant="primary"
          disabled={!this.validateSignUpForm()}
          type="submit"
        >
          Submit
        </Button>
      </Form.Row>
    </Form>
  );

  render() {
    return (
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          {this.state.newUser === null
            ? (
              <Fragment>
                <Tabs defaultActiveKey="login" id="loginSignupConfirmationAAA">
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
              </Fragment>
            )
            : (
              <Fragment>
                <Tabs activeKey="confirmation" id="loginSignupConfirmationBBB">
                  <Tab eventKey="confirmation" title="Confirm Email">
                    <Card>
                      <Card.Body>{this.renderConfirmationForm()}</Card.Body>
                    </Card>
                  </Tab>
                </Tabs>
              </Fragment>
            )}
          <br />
          <br />
          <br />
        </Col>
      </Row>
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(LoginRegisterForm));
