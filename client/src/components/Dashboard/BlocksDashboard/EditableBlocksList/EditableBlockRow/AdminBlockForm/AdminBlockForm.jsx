import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button, Col } from 'react-bootstrap';
import { useFormInput } from '../../../../../../helpers/hooks';
import { setUser, setIsLoading } from '../../../../../../store/actions';

const AdminBlockForm = (props) => {
  const dispatch = useDispatch();
  const { onFormClose } = props;
  const name = useFormInput(props.name);


  return (
    <tr>
      <td>
        <Form style={{ padding: '1rem' }}>
          <Form.Row>
            <Form.Group as={Col} controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                placeholder="Firstname"
                {...name}
              />
            </Form.Group>
          </Form.Row>
        </Form>
      </td>
    </tr>
  )
};

export default AdminBlockForm;
