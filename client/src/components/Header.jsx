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
          <NavDropdown.Item href="#details">User Details</NavDropdown.Item>
          <NavDropdown.Item href="#action">Change Faction</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item /*onClick={}*/>Log Out</NavDropdown.Item>
        </NavDropdown>
      );
    } else {
      return (
      <Navbar.Text className="justify-content-right">
       <a href="/login">Sign In/Sign Up</a>
      </Navbar.Text>
      );
    }
  }

  render() {
    return (
      <Navbar bg="light" variant="light" fixed="top" style={{position: 'relative'}}>
        <Navbar.Brand href="#home" className="mr-auto">Half Monster Games</Navbar.Brand>
        <Nav className="justify-content-center mr-auto" defaultActiveKey="#home">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#lore">Lore</Nav.Link>
          <Nav.Link href="#gamerules">Game Rules</Nav.Link>
          <Nav.Link href="#megagame">MegaGame</Nav.Link>
        </Nav>
        {this.getUser()}
      </Navbar>
    );
  }
}

export default Header;
