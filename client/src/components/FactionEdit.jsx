import React, { Component } from 'react';
import { Card, Row, Button, Col, Form } from 'react-bootstrap';

class FactionEdit extends Component {
    render() {
        return(
            <Card>
                <Card.Header className="text-center" style={{fontSize: '1.4rem'}}>Change Faction</Card.Header>
                <Form>
                <Card.Body>
                  <fieldset>
                    <Form.Group as={Row}>
                        <Col>
                        <Form.Check
                            type="radio"
                            label="Voidborn"
                            name="formHorizontalRadios"
                            id="voidbornRadio"
                        />
                        <Form.Check
                            type="radio"
                            label="Biochrondys"
                            name="formHorizontalRadios"
                            id="biochrondysRadio"
                        />
                        <Form.Check
                            type="radio"
                            label="Mechanica"
                            name="formHorizontalRadios"
                            id="mechanicaRadio"
                        />
                        <Form.Check
                            type="radio"
                            label="Gatekeepers"
                            name="formHorizontalRadios"
                            id="gatekeepersRadio"
                        />
                        </Col>
                    </Form.Group>
                  </fieldset>
                </Card.Body>
                <Card.Body>
                  <Form.Row className="justify-content-center">
                    <Button variant="primary" type="submit">
                      Update
                    </Button>
                  </Form.Row>
                </Card.Body>
              </Form>
            </Card>
        );
    }
}

export default FactionEdit;