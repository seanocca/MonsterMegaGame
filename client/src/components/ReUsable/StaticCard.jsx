import React from 'react';

import { Row, Col, Card } from 'react-bootstrap';

import './ReUsableContent.css';

function textData(text) {
  return text.data.map((paragraph, ii) => (
    <Card.Text key={text.id}>
      {paragraph}
    </Card.Text>
  ));
}

function ReUsableStaticCard(text) {
  console.log(text.name);
  return (
    <Row>
      <Col className="static-column">
        <Card className="text-center static-card">
          <Card.Header className="static-card-header">{text.name}</Card.Header>
          <Card.Body key={text.id}>
            {textData(text)}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default ReUsableStaticCard;
