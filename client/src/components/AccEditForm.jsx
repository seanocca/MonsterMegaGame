import React, { Component } from "react";
import { Form, Col, Card, Button } from "react-bootstrap";

class AccEditForm extends Component {
  render() {
    return (
      <Card>
        <Card.Header>Edit Account Details</Card.Header>
        <Form>
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
          <Form.Row className="justify-content-center">
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form.Row>
        </Form>
      </Card>
    );
  }
}

export default AccEditForm;
