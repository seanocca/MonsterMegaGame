import React, { useState } from 'react';
import {
  Form, Button, Col, Image,
} from 'react-bootstrap';
import { useFormInput, useTextarea } from '../../../../../helpers/hooks';

const AdminFactionForm = (props) => {
  const {
    id, onFormClose, onFormSubmit, createdAt, banner,
  } = props;

  console.log(props.logo);
  const name = useFormInput(props.name);
  const leader = useFormInput(props.leader);
  const faculty = useFormInput(props.faculty);
  const desc = useTextarea(props.desc);
  const [logo, setLogo] = useState(props.logo);
  const [newLogo, setNewLogo] = useState(null);

  const paddingRight = {
    marginRight: '10px',
  };

  const handleNewFile = ({ target }) => {
    if (target.files.length > 0) {
      setLogo(URL.createObjectURL(target.files[0]));
      setNewLogo(target.files[0]);
    }
  };

  const handleSubmit = () => {
    onFormSubmit({
      id,
      createdAt,
      banner,
      name: name.value,
      leader: leader.value,
      faculty: faculty.value,
      desc: desc.value,
      logo,
      newLogo,
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
          <Form.Row>
            <Form.Group as={Col} controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                as="input"
                type="file"
                accept="image/*"
                onChange={handleNewFile}
              />
              <Image src={logo} height="150" width="150" thumbnail style={{ backgroundColor: 'transparent', border: 'none' }} />
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
    </tr>
  );
};

export default AdminFactionForm;
