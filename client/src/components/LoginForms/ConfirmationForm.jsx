import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import { userHasAuthenticated, userConfirmedEmail } from '../../store/actions';
import LoaderButton from './LoaderButton';

const mapStateToProps = state => {
  return { 
    user: state.user,
  };
};

const ConfirmationForm = ({ history, user, userHasAuthenticated, userConfirmedEmail }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [signUpConfirmationCode, setSignUpConfirmationCode] = useState('');

  const handleChange = (event) => setSignUpConfirmationCode(event.target.value || '');
  const validateConfirmationForm = () => signUpConfirmationCode.length > 0;

  const handleConfirmationSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      await Auth.confirmSignUp(user.email, signUpConfirmationCode);
      await Auth.signIn(user.email, user.password);

      userHasAuthenticated(true);
      userConfirmedEmail(true);
      history.push("/");
    } catch (e) {
      alert(e);
      setIsLoading(false);
    }
  }

  return (
  <Form onSubmit={handleConfirmationSubmit}>
    <Form.Group controlId="signUpConfirmationCode">
      <Form.Label>Confirmation Code</Form.Label>
      <Form.Control
        autoFocus
        type="tel"
        value={signUpConfirmationCode}
        onChange={handleChange}
      />
      <Form.Text className="text-muted">Please check your email for the code.</Form.Text>
    </Form.Group>
    
    <LoaderButton
      block
      disabled={!validateConfirmationForm()}
      type="submit"
      isLoading={isLoading}
      text="Verify"
      loadingText="Verifying…"
    />
  </Form>);
}

export default withRouter(connect(mapStateToProps, { 
  userHasAuthenticated,
  userConfirmedEmail })(ConfirmationForm));