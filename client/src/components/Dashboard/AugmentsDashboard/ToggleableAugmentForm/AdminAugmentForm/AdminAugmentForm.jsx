import React from 'react';
import {
  Form, Button, Col, Card,
} from 'react-bootstrap';

import { useFormInput, useFactionCardStyles } from '../../../../../helpers/hooks';

const AdminAugmentForm = (props) => {
  const {
    id, onFormClose, onFormSubmit, createdAt, image,
  } = props;
  const name = useFormInput(props.name);
  const type = useFormInput(props.type);
  const action = useFormInput(props.action);
  const desc = useFormInput(props.desc);
  const faction = useFormInput(props.faction);

  const factionStyles = useFactionCardStyles(faction);

  const handleSubmit = () => {
    onFormSubmit({
      augment: {
        id,
        createdAt,
        image,
        name: name.value,
        type: type.value,
        action: action.value,
        desc: desc.value,
      },
      faction: faction.value,
    });
  };

  const submitText = props.id ? 'Update' : 'Create';
  return (
    <Card bg="dark" text="white" style={factionStyles}>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Augment Name" {...name} />
          </Form.Group>
          <Form.Group as={Col} controlId="type">
            <Form.Label>Type</Form.Label>
            <Form.Control placeholder="Augment Type" {...type} />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="action">
            <Form.Label> Action</Form.Label>
            <Form.Control placeholder="Augment Action" {...action} />
          </Form.Group>
          <Form.Group as={Col} controlId="faction">
            <Form.Label>Faction</Form.Label>
            <Form.Control
              as="select"
              {...faction}
            >
              <option value="">Choose Faction...</option>
              <option value="Mechanica">Mechanica</option>
              <option value="Gatekeeper">Gatekeeper</option>
              <option value="Voidborn">Voidborn</option>
              <option value="Biochrondys">Biochrondys</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="desc">
            <Form.Label>Description</Form.Label>
            <Form.Control placeholder="Augment Description" {...desc} />
          </Form.Group>
        </Form.Row>
        <Form.Row className="justify-content-center">
          <Button variant="primary" type="button" onClick={handleSubmit}>
            {submitText}
          </Button>
          <Button variant="danger" type="button" onClick={onFormClose}>
            Cancel
          </Button>
        </Form.Row>
      </Form>
    </Card>
  );
};

export default AdminAugmentForm;
