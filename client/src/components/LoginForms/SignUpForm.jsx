import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Col } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import { setUser } from '../../store/actions';
import LoaderButton from './LoaderButton';

const seedState = {
  email: '',
  password: '',
  confirm: '',
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  postcode: '',
  state: '',
  userSub: '',
  emailConfirmed: false,
};

const SignUpForm = ({ setUser }) => {
  const [formValues, setFormValues] = useState(seedState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    event.persist();
    setFormValues(values => ({ ...values, [event.target.id]: event.target.value }));
  }

  const validateSignUpForm = () => {
    const { email, password, confirm } = formValues;
    return email.length > 0 && password.length > 0 && password === confirm;
  }

  const handleSignUpSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    try {
      const newUser = await Auth.signUp({
        username: formValues.email,
        password: formValues.password
      });
      setIsLoading(false);
      setUser({ ...formValues, cognitoID: newUser.userSub });
    } catch (e) {
      alert(e.message);
      setIsLoading(false);
    }
  }

  return (
    <Form onSubmit={handleSignUpSubmit}>
      <Form.Row>
        <Form.Group as={Col} controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            autoFocus
            placeholder="First Name"
            value={formValues.firstName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            placeholder="Last Name"
            value={formValues.lastName}
            onChange={handleChange}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={formValues.email}
            onChange={handleChange}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="confirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={formValues.confirm}
            onChange={handleChange}
          />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          placeholder="Address"
          value={formValues.address}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            placeholder="City"
            value={formValues.city}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="state">
          <Form.Label>State</Form.Label>
          <Form.Control
            as="select"
            onChange={handleChange}
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

        <Form.Group as={Col} controlId="postcode">
          <Form.Label>Post Code</Form.Label>
          <Form.Control
            placeholder="Post Code"
            value={formValues.postcode}
            onChange={handleChange}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row className="justify-content-center">
        <LoaderButton
          block
          variant="primary"
          disabled={!validateSignUpForm()}
          type="submit"
          isLoading={isLoading}
          text="Sign Up"
          loadingText="Signing up…"
        />
      </Form.Row>
    </Form>
  );
}

export default withRouter(connect(null, { setUser })(SignUpForm));

