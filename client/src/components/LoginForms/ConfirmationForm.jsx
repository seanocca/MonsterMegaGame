import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import { userHasAuthenticated, setUser, setIsLoading } from '../../store/actions';
import LoaderButton from './LoaderButton';

const linkPadding = {
  padding: '0',
  margin: '0 4px 4px 4px',
};

const ConfirmationForm = ({ history }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.isLoading);
  const user = useSelector(state => state.user);
  const unConfirmedUser = useSelector(state => state.unConfirmedUser);
  const [signUpConfirmationCode, setSignUpConfirmationCode] = useState('');
  const [resendEmail, setResendEmail] = useState('');
  const [resendConfirmation, setResendConfirmation] = useState(false);

  const handleChange = event => setSignUpConfirmationCode(event.target.value || '');
  const handleEmailChange = event => setResendEmail(event.target.value || '');
  const validateConfirmationForm = () => signUpConfirmationCode.length > 0;
  const validateResendConfirmationForm = () => resendEmail.length > 0;

  const handleConfirmationSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    const currentUserDetails = (unConfirmedUser !== null) ? unConfirmedUser : user;

    try {
      await Auth.confirmSignUp(currentUserDetails.email, signUpConfirmationCode);
      await Auth.signIn(currentUserDetails.email, currentUserDetails.password);

      localStorage.removeItem('unConfirmedUser');
      dispatch(setUser(currentUserDetails));
      dispatch(userHasAuthenticated(true));
      history.push('/');
    } catch (e) {
      // eslint-disable-next-line no-alert
      alert(e);
      dispatch(setIsLoading(false));
    }
  };

  const toggleForms = () => setResendConfirmation(state => !state);

  const handleResendConfirmationSubmit = async (event) => {
    event.preventDefault();
    dispatch(setIsLoading(true));
    await Auth.resendSignUp(resendEmail);
    dispatch(setIsLoading(false));
    toggleForms();
  };

  const ResendConfirmationForm = () => (
    <Form onSubmit={handleResendConfirmationSubmit}>
      <Form.Group controlId="resendConfirmationCode">
        <Form.Label>Resend Confirmation Code</Form.Label>
        <Form.Control
          autoFocus
          type="email"
          value={resendEmail}
          onChange={handleEmailChange}
        />
        <Form.Text className="text-muted">Please enter your original email address.</Form.Text>
        <Form.Text className="text-muted">
          Or click
          <Button size="sm" style={linkPadding} variant="link" onClick={toggleForms}>here</Button>
          to enter your confirmation code.
        </Form.Text>
      </Form.Group>

      <LoaderButton
        block
        disabled={!validateResendConfirmationForm()}
        type="submit"
        isLoading={isLoading}
        text="Resend"
        loadingText="Sending..."
      />
    </Form>
  );

  const ConfirmationForm = () => (
    <Form onSubmit={handleConfirmationSubmit}>
      <Form.Group controlId="signUpConfirmationCode">
        <Form.Label>Confirmation Code</Form.Label>
        <Form.Control
          autoFocus
          type="tel"
          value={signUpConfirmationCode}
          onChange={handleChange}
        />
        <Form.Text className="text-muted">Please check your email for the code. (Also check your spam folder)</Form.Text>
        <Form.Text className="text-muted">
          Or click
          <Button size="sm" style={linkPadding} variant="link" onClick={toggleForms}>here</Button>
          to resend your confirmation code.
        </Form.Text>
      </Form.Group>

      <LoaderButton
        block
        disabled={!validateConfirmationForm()}
        type="submit"
        isLoading={isLoading}
        text="Verify"
        loadingText="Verifying…"
      />
    </Form>
  );

  return (
    <Fragment>
      {resendConfirmation === true ? (<ResendConfirmationForm />) : (<ConfirmationForm />)}
    </Fragment>
  );
};

export default withRouter(ConfirmationForm);
