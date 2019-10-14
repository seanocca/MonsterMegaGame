import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useFormInput, useTextarea } from '../../../../../helpers/hooks';

const AdminFactionForm = (props) => {
  const {
    id, onFormClose, onFormSubmit, createdAt, banner,
  } = props;
  const name = useFormInput(props.name);
  const leader = useFormInput(props.leader);
  const faculty = useFormInput(props.faculty);
  const desc = useTextarea(props.desc);

  const handleSubmitx = () => {
    onFormSubmit({
      id,
      createdAt,
      banner,
      name: name.value,
      leader: leader.value,
      faculty: faculty.value,
      desc: desc.value,
    });
  };

  const submitText = props.id ? 'Update' : 'Create';
  return (
    <tr>
      <td colSpan="3">
        <Form style={{ padding: '1rem' }}>
          <Form.Row>
            <Form.Group as={Col} controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Faction Name"
                {...name}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="leader">
              <Form.Label>Leader</Form.Label>
              <Form.Control
                placeholder="Faction Leader"
                {...leader}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="faculty">
              <Form.Label>Faculty</Form.Label>
              <Form.Control
                placeholder="Faculty"
                {...faculty}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="desc">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows="4"
                placeholder="Faculty"
                {...desc}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row className="justify-content-center">
            <Button variant="primary" type="button" onClick={handleSubmitx}>
              {submitText}
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

export default AdminFactionForm;
