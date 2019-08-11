import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import Logo from "./../images/hmgLogo.png";

const textColor = {
  color: "#ffc107",
  fontWeight: "600",
  fontSize: "1.25rem"
}

const hamburgerColor = {
  backgroundColor: "#ffc107"
}

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
          style={{backgroundColor: "#01004d"}}
          title="User###"
          id="basic-nav-dropdown"
          className="justify-content-right"
        >
          <NavDropdown.Item style={textColor} href="#details">User Details</NavDropdown.Item>
          <NavDropdown.Item style={textColor} href="#action">Change Faction</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item style={textColor} /*onClick={}*/>Log Out</NavDropdown.Item>
        </NavDropdown>
      );
    } else {
      return (
        <Navbar.Text className="justify-content-right">
          <a style={textColor} href="/login">Sign In/Sign Up</a>
        </Navbar.Text>
      );
    }
  }

  render() {
    return (
      <Navbar
        fixed="top"
        style={{ position: "relative", backgroundImage: "linear-gradient(#01004d 85%, #01004d96)" }}
        expand="md"
      >
        <Navbar.Brand href="/" className="mr-auto" style={textColor}>
          <Image src={Logo} alt="Half Monster Games" width="50" height="50" />
          &nbsp;Half Monster Games
        </Navbar.Brand>
        <Navbar.Toggle style={hamburgerColor}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="justify-content-center m-auto"
            defaultActiveKey="#home"
          >
            <Nav.Link style={textColor} href="/">Home</Nav.Link>
            <Nav.Link style={textColor} href="/lore">Lore</Nav.Link>
            <Nav.Link style={textColor} href="/gamerules">Game Rules</Nav.Link>
            <Nav.Link style={textColor} href="/factions">Factions</Nav.Link>
            <Nav.Link style={textColor} href="/bestiary">Bestiary</Nav.Link>
          </Nav>
          {this.getUser()}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
