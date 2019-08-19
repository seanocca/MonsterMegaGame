import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const BeastCardForm = (props) => {
  const { onFormSubmit } = props;
  return (
    // dummy form
    <Form>
      <Row>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>
      <button type="submit" onSubmit={onFormSubmit}>Submit</button>
    </Form>
  );
};

export default BeastCardForm;
