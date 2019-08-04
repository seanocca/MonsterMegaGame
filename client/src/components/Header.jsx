import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import Logo from "./../images/hmgLogo.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
  }

  getUser() {
    //this.user = //Get user from Session
    if (this.state.user !== null) {
      return (
        <NavDropdown
          title="User###"
          id="basic-nav-dropdown"
          className="justify-content-right"
        >
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
      <Navbar
        bg="light"
        variant="light"
        fixed="top"
        style={{ position: "relative" }}
      >
        <Navbar.Brand href="/" className="mr-auto">
          <Image src={Logo} alt="Half Monster Games" width="50" height="50" />
          Half Monster Games
        </Navbar.Brand>
        <Nav
          className="justify-content-center mr-auto"
          defaultActiveKey="#home"
        >
          <Nav.Link href="/">Home</Nav.Link>
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
