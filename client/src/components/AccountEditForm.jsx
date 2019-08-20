import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Form, Col, Card, Button,
} from 'react-bootstrap';
import { setUser, setIsLoading } from '../store/actions';

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
  cognitoID: '',
};

const AccEditForm = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(seedState);
  const user = useSelector(state => state.user);

  useEffect(() => {
    if (user !== null) setFormValues(user);
  }, [user]);

  const handleChange = (event) => {
    event.persist();
    setFormValues(values => ({ ...values, [event.target.id]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(setIsLoading(true));
    dispatch(setUser(formValues));
  };

  return (
    <Card>
      <Card.Header className="text-center" style={{ fontSize: '1.4rem' }}>Edit Account Details</Card.Header>
      <Form style={{ padding: '1rem' }} onSubmit={handleSubmit}>
        <Card.Body inline="true">
          <Form.Row>
            <Form.Group as={Col} controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                placeholder="FName"
                value={formValues.firstName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                placeholder="LName"
                value={formValues.lastName}
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="cognitoID">
              <Form.Label>Database ID</Form.Label>
              <Form.Control
                placeholder="abc123"
                value={formValues.cognitoID}
                onChange={handleChange}
                disabled
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="current@email.com"
                value={formValues.email}
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formResetPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" placeholder="New Password" />
            </Form.Group>

            <Form.Group as={Col} controlId="formResetConfirmPassword">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              value={formValues.address}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                placeholder="San Diego"
                value={formValues.city}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control
                as="select"
                value={formValues.state}
                onChange={handleChange}
              >
                <option value="">Choose...</option>
                <option value="QLD">QLD</option>
                <option value="NSW">NSW</option>
                <option value="VIC">VIC</option>
                <option value="NT">NT</option>
                <option value="SA">SA</option>
                <option value="WA">WA</option>
                <option value="ACT">ACT</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="postcode">
              <Form.Label>Post Code</Form.Label>
              <Form.Control
                placeholder="1234"
                value={formValues.postcode}
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>
        </Card.Body>
        <Form.Row className="justify-content-center">
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form.Row>
      </Form>
    </Card>
  );
};

export default AccEditForm;
