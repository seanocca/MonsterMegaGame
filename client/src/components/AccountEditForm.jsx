import React from 'react';
import {
  Form, Col, Card, Button,
} from 'react-bootstrap';

const AccEditForm = () => {
  console.log('blah');

  return (
    <Card>
      <Card.Header className="text-center" style={{ fontSize: '1.4rem' }}>Edit Account Details</Card.Header>
      <Form style={{ padding: '1rem' }}>
        <Card.Body inline="true">
          <Form.Row>
            <Form.Group as={Col} controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="FName" />
            </Form.Group>

            <Form.Group as={Col} controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="LName" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control placeholder="current@email.com" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="current@email.com" />
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
