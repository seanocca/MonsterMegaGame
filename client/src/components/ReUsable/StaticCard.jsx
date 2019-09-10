import React from 'react';

import { Row, Col, Card } from 'react-bootstrap';

import './ReUsableContent.css';

const textData = ({ data }) => data.map(paragraph => (
  <Card.Text key={paragraph.id}>
    {paragraph.line}
  </Card.Text>
));

const ReUsableStaticCard = text => (
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

export default ReUsableStaticCard;
