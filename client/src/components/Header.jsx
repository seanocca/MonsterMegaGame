import React, { Component } from "react";
import { Navbar, Form, Button, Nav, FormControl } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light" fixed="top">
        <Navbar.Brand href="#home">Half Monster Games</Navbar.Brand>
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" />
          <Button className="" variant="outline-primary">
            Search
          </Button>
        </Form>
      </Navbar>
    );
  }
}

export default Header;
