import React, { useState } from 'react';
import {
  Form, Button, Col, Image,
} from 'react-bootstrap';

import { useFormInput, useFactionCardStyles } from '../../../../../helpers/hooks';

const AdminAugmentForm = (props) => {
  const {
    id, onFormClose, onFormSubmit, createdAt, logo,
  } = props;
  const name = useFormInput(props.name);
  const type = useFormInput(props.type);
  const action = useFormInput(props.action);
  const desc = useFormInput(props.desc);
  const faction = useFormInput(props.faction);
  const [image, setImage] = useState(props.image);
  const [newImage, setNewImage] = useState(null);

  const factionStyles = useFactionCardStyles(faction);
  const paddingRight = {
    marginRight: '10px',
  };

  const handleNewFile = ({ target }) => {
    if (target.files.length > 0) {
      setImage(URL.createObjectURL(target.files[0]));
      setNewImage(target.files[0]);
    }
  };

  const handleSubmit = () => {
    onFormSubmit({
      augment: {
        id,
        createdAt,
        image,
        newImage,
        name: name.value,
        type: type.value,
        action: action.value,
        desc: desc.value,
      },
      faction: faction.value,
      logo,
    });
  };

  const submitText = props.id ? 'Update' : 'Create';
  return (
    <Col className="m-4" md={4} xs={10} style={factionStyles}>
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
              <option value="Gatekeepers">Gatekeepers</option>
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
        <Form.Row>
          <Form.Group as={Col} controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control
              as="input"
              type="file"
              accept="image/*"
              onChange={handleNewFile}
            />
            <Image src={ image } height="150" width="150" thumbnail style={{ backgroundColor: 'transparent', border: 'none' }} />
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
    </Col>
  );
};

export default AdminAugmentForm;
