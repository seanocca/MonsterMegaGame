import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null };

  }

  getUser(){
    //this.user = //Get user from Session
    if (this.state.user !== null){
      return (
        <NavDropdown title="User###" id="basic-nav-dropdown" className="justify-content-right">
          <NavDropdown.Item href="#login">User Details</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      );
    } else {
      return (
      <Navbar.Text className="justify-content-right">
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
      );
    }
  }

  render() {
    return (
      <Navbar bg="light" variant="light" fixed="top">
        <Navbar.Brand href="#home" className="mr-auto">Half Monster Games</Navbar.Brand>
        <Nav className="justify-content-center mr-auto" defaultActiveKey="#home">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        {this.getUser()}
      </Navbar>
    );
  }
}

export default Header;
