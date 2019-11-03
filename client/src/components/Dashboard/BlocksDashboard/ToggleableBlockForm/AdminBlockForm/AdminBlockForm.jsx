import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useFormInput } from '../../../../../helpers/hooks';

const AdminBlockForm = (props) => {
  const {
    id, onFormClose, onFormSubmit,
  } = props;
  const name = useFormInput(props.name);
  const latitude = useFormInput(props.latitude);
  const longitude = useFormInput(props.longitude);

  console.log(props);

  const handleSubmit = () => {
    onFormSubmit({
      id,
      name: name.value,
      latitude: latitude.value,
      longitude: longitude.value,
    });
  };

  const paddingRight = {
    marginRight: '10px',
  };

  const submitText = props.id ? 'Update' : 'Create';
  return (
    <td colSpan="3">
      <Form style={{ padding: '1rem' }}>
        <Form.Row>
          <Form.Group as={Col} controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              placeholder="Block Name"
              {...name}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="name">
            <Form.Label>Latitude</Form.Label>
            <Form.Control
              {...latitude}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="name">
            <Form.Label>Longitude</Form.Label>
            <Form.Control
              {...longitude}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row className="justify-content-center">
          <Button variant="primary" type="button" onClick={handleSubmit} style={paddingRight}>
            {submitText}
          </Button>
          <Button variant="danger" type="button" onClick={onFormClose}>
            Cancel
          </Button>
        </Form.Row>
      </Form>
    </td>
  );
};

export default AdminBlockForm;
