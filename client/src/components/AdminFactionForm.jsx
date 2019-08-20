import React from 'react';
import {
  Accordion, Form, Button, Col,
} from 'react-bootstrap';
import { useFormInput } from '../helpers/hooks';

const AdminFactionForm = (props) => {
  const { onFormClose } = props;
  const name = useFormInput(props.name);
  const leader = useFormInput(props.leader);
  const faculty = useFormInput(props.faculty);
  // TODO: create new hook for array based state storage with form.
  const desc = useFormInput(props.desc);

  return (
    <Accordion>
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
          <Button variant="primary" type="submit">
            Update
          </Button>
          <Button variant="danger" type="button" onClick={onFormClose}>
            Cancel
          </Button>
        </Form.Row>
      </Form>
    </Accordion>
  );
};

export default AdminFactionForm;