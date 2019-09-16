import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import {
  Container, Card, Row, Col, Tabs, Tab,
} from 'react-bootstrap';
import ConfirmationForm from '../components/LoginForms/ConfirmationForm';
import LoginForm from '../components/LoginForms/LoginForm';
import SignUpForm from '../components/LoginForms/SignUpForm';

const mapStateToProps = state => ({
  user: state.user,
  unConfirmedUser: state.unConfirmedUser,
});

const Login = ({ user, unConfirmedUser }) => {
  const [key, setKey] = useState('confirmation');

  return (
    <Container className="custom-container" fluid="false">
      <Row noGutters="false">
        <Col md={{ span: 6, offset: 3 }} xs={12} className="custom-tab">
          {(unConfirmedUser === null && user === null)
            ? (
              <Fragment>
                <Tabs defaultActiveKey="login" id="loginSignupConfirmationAAA">
                  <Tab eventKey="login" title="Login">
                    <Card className="custom-form">
                      <Card.Body>
                        <LoginForm />
                      </Card.Body>
                    </Card>
                  </Tab>
                  <Tab eventKey="signUp" title="Sign Up" className="custom-tab">
                    <Card className="custom-form">
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
                <Tabs activeKey={key} onSelect={k => setKey(k)} id="loginSignupConfirmationBBB">
                  <Tab eventKey="confirmation" title="Confirm Email" className="custom-tab">
                    <Card className="custom-form">
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
};

export default connect(mapStateToProps)(Login);
