import React, { Component } from "react";
import { Form, Button, Card, Row, Col, Tabs, Tab } from 'react-bootstrap';


class Forms extends Component {

    LogForm() {
        return(
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>);
    }

    SignUpForm() {
        return(
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirsName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="First Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="Last Name" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Form.Row>
                <Form.Row className="justify-content-center">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form.Row>
            </Form>);
    }

    render() {
        return (
            <Row>
                <Col md={{ span: 6, offset: 3 }} style={{padding: '0 2rem'}}>
                    <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
                        <Tab eventKey="login" title="Login">
                            <Card style={{padding: '1.5rem'}}>
                                {this.LogForm()}
                            </Card>
                        </Tab>
                        <Tab eventKey="signUp" title="Sign Up">
                            <Card style={{padding: '1.5rem'}}>
                                {this.SignUpForm()}
                            </Card>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
            );
    }
}

export default Forms;