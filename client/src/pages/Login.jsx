import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Container, Card, Row, Col, Tabs, Tab } from 'react-bootstrap';
import ConfirmationForm from '../components/LoginForms/ConfirmationForm';
import LoginForm from '../components/LoginForms/LoginForm';
import SignUpForm from '../components/LoginForms/SignUpForm';

const mapStateToProps = state => {
  return { 
    user: state.user,
  };
};

const Login = ({ user }) => (
  <Container style={{ padding: '4rem 0' }}>
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        {user === null
          ? (
            <Fragment>
              <Tabs defaultActiveKey="login" id="loginSignupConfirmationAAA">
                <Tab eventKey="login" title="Login">
                  <Card>
                    <Card.Body>
                      <LoginForm />
                    </Card.Body>
                  </Card>
                </Tab>
                <Tab eventKey="signUp" title="Sign Up">
                  <Card>
                    <Card.Body>
                      <SignUpForm />
                    </Card.Body>
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
                    <Card.Body>
                      <ConfirmationForm />
                    </Card.Body>
                  </Card>
                </Tab>
              </Tabs>
            </Fragment>
          )}
      </Col>
    </Row>
  </Container>
);

export default connect(mapStateToProps)(Login);
