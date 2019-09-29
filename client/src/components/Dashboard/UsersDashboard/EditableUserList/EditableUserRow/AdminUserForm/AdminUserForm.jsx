import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useFormInput } from '../../../../../../helpers/hooks';

const AdminUserForm = (props) => {
  const { onFormClose } = props;
  const firstName = useFormInput(props.firstName);
  const lastName = useFormInput(props.lastName);
  const email = useFormInput(props.email);
  const address = useFormInput(props.address);
  const city = useFormInput(props.city);
  const state = useFormInput(props.state);
  const postcode = useFormInput(props.postcode);

  return (
    <tr>
      <td colSpan="3">
        <Form style={{ padding: '1rem' }}>
          <Form.Row>
            <Form.Group as={Col} controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                placeholder="Firstname"
                {...firstName}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                placeholder="Last Name"
                {...lastName}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="current@email.com"
                {...email}
              />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              {...address}
            />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                placeholder="Brisbane"
                {...city}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control
                as="select"
                {...state}
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
                {...postcode}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row className="justify-content-center">
            <Button variant="primary" type="submit">
              Update
            </Button>
            <Button variant="danger" type="button" onClick={onFormClose}>
              Cancel
            </Button>
          </Form.Row>
        </Form>
      </td>
    </tr>
  );
};

export default AdminUserForm;
