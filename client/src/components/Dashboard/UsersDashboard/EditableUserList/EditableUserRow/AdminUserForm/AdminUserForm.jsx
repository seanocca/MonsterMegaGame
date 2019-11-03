import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button, Col } from 'react-bootstrap';
import { useFormInput } from '../../../../../../helpers/hooks';
import { setUser, setIsLoading } from '../../../../../../store/actions';

const AdminUserForm = (props) => {
  const dispatch = useDispatch();
  const { onFormClose } = props;
  const firstName = useFormInput(props.firstName);
  const lastName = useFormInput(props.lastName);
  const email = useFormInput(props.email);
  const address = useFormInput(props.address);
  const city = useFormInput(props.city);
  const state = useFormInput(props.state);
  const postcode = useFormInput(props.postcode);
  const faction = useFormInput(props.faction);
  const {
    cognitoID, createdAt, userID,
  } = props;

  const [isAdmin, setIsAdmin] = useState(props.isAdmin);
  const disabled = useSelector(({ user }) => ((user.userID === userID) ? { disabled: 'disabled' } : {}));

  const checkBoxClick = event => setIsAdmin(val => !val);

  const paddingRight = {
    marginRight: '10px',
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(setIsLoading(true));
    const userObject = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      address: address.value,
      city: city.value,
      state: state.value,
      postcode: postcode.value,
      isAdmin,
      cognitoID,
      createdAt,
      userID,
      update: true,
    };

    dispatch(setUser(userObject));
    onFormClose();
  };

  return (
    <tr>
      <td colSpan="4">
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
                disabled
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
          <Form.Row>
            <Form.Group as={Col} controlId="postcode">
              <Form.Label>Faction</Form.Label>
              <Form.Control
                {...faction}
                disabled
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="isAdmin">
              <Form.Check
                label="Site Administrator"
                defaultChecked={isAdmin}
                onChange={checkBoxClick}
                {...disabled}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row className="justify-content-center">
            <Button variant="primary" type="submit" onClick={handleUpdate} style={paddingRight}>
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
