import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Card, Row, Button, Col, Form,
} from 'react-bootstrap';
import { setUser, setIsLoading } from '../store/actions';

const seedState = {
  email: '',
  faction: '',
  password: '',
  confirm: '',
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  postcode: '',
  state: '',
  cognitoID: '',
  isAdmin: false,
};

const FactionEdit = (props) => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(seedState);
  const [checkedValue, setCheckedValue] = useState({ });
  const user = useSelector(state => state.user);

  useEffect(() => {
    if (user !== null) { 
      setFormValues(user);
      setCheckedValue({
        [user.faction]: {
          defaultChecked: true,
        },
      });
    }
  }, [user]);

  const handleChange = (event) => {
    event.persist();
    setFormValues(values => ({ ...values, faction: event.target.id }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(setIsLoading(true));
    dispatch(setUser(formValues));
  };

  const noFaction = (!formValues.faction)
    ? (<Card.Header className="text-center" style={{ fontSize: '1.1rem' }}>No Faction Selected!</Card.Header>)
    : (null);

  return (
    <Card>
      <Card.Header className="text-center" style={{ fontSize: '1.4rem' }}>Change Faction</Card.Header>
      {noFaction}
      <Form>
        <Card.Body>
          <fieldset>
            <Form.Group as={Row}>
              <Col>
                <Form.Check
                  type="radio"
                  label="Voidborn"
                  name="formHorizontalRadios"
                  id="Voidborn"
                  onChange={handleChange}
                  {...checkedValue.Voidborn}
                />
                <Form.Check
                  type="radio"
                  label="Biochrondys"
                  name="formHorizontalRadios"
                  id="Biochrondys"
                  onChange={handleChange}
                  {...checkedValue.Biochrondys}
                />
                <Form.Check
                  type="radio"
                  label="Mechanica"
                  name="formHorizontalRadios"
                  id="Mechanica"
                  onChange={handleChange}
                  {...checkedValue.Mechanica}
                />
                <Form.Check
                  type="radio"
                  label="Gatekeepers"
                  name="formHorizontalRadios"
                  id="Gatekeepers"
                  onChange={handleChange}
                  {...checkedValue.Gatekeepers}
                />
              </Col>
            </Form.Group>
          </fieldset>
        </Card.Body>
        <Card.Body>
          <Form.Row className="justify-content-center">
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Update
            </Button>
          </Form.Row>
        </Card.Body>
      </Form>
    </Card>
  );
};

export default FactionEdit;
