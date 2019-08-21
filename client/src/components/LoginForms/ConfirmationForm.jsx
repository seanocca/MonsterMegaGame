import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import { userHasAuthenticated, setUser, setIsLoading } from '../../store/actions';
import LoaderButton from './LoaderButton';

const ConfirmationForm = ({ history }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.isLoading);
  const user = useSelector(state => state.user);
  const unConfirmedUser = useSelector(state => state.unConfirmedUser);
  const [signUpConfirmationCode, setSignUpConfirmationCode] = useState('');

  const handleChange = event => setSignUpConfirmationCode(event.target.value || '');
  const validateConfirmationForm = () => signUpConfirmationCode.length > 0;

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
    </Form>
  );
};

export default withRouter(ConfirmationForm);
