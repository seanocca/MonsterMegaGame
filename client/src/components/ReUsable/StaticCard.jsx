import React from 'react';

import { Row, Col, Card } from 'react-bootstrap';

function textData(data) {
  console.log(data);
  return data.map((info, i) => (
    <Card.Body key={info.id}>
      {info.data.map((paragraph, ii) => (
        <Card.Text key={info.id}>
          {paragraph}
        </Card.Text>
      ))}
    </Card.Body>
  ));
}

function ReUsableStaticCard(text) {
  return (
    <Row>
      <Col>
        <Card>
          <Card.Header>Overview</Card.Header>
          {textData(text)}
        </Card>
      </Col>
    </Row>
  );
}

export default ReUsableStaticCard;
