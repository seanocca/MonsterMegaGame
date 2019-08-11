import React, { Component } from 'react';
import {
  Navbar, Nav, NavDropdown, Image,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Logo from '../images/hmgLogo.png';

const textColor = {
  color: '#ffc107',
  fontWeight: '600',
  fontSize: '1.25rem',
  textDecoration: 'none',
};

const imagePadding = {
  marginRight: '5px',
};

const hamburgerColor = {
  backgroundColor: '#ffc107',
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { user: 'null' };
  }

  getUser() {
    // this.user = //Get user from Session
    const { user } = this.state;

    if (user !== null) {
      return (
        <NavDropdown
          style={{ backgroundColor: '#01004d' }}
          title="User###"
          id="basic-nav-dropdown"
          className="justify-content-right"
        >
          <NavDropdown.Item style={textColor} href="#details">User Details</NavDropdown.Item>
          <NavDropdown.Item style={textColor} href="#action">Change Faction</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item style={textColor}>Log Out</NavDropdown.Item>
        </NavDropdown>
      );
    }
      return (
        <Navbar.Text className="justify-content-right">
          <a style={textColor} href="/login">Sign In/Sign Up</a>
        </Navbar.Text>
      );
    }

  render() {
    return (
      <Navbar
        fixed="top"
        style={{ position: 'relative', backgroundImage: 'linear-gradient(#01004d 85%, #01004d96)' }}
        expand="md"
      >
        <Navbar.Brand>
          <Link className="mr-auto" style={textColor} to="/">
            <Image src={Logo} style={imagePadding} alt="Half Monster Games" width="50" height="50" />
            Half Monster Games
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle style={hamburgerColor} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="justify-content-center m-auto"
            defaultActiveKey="#home"
          >
            <LinkContainer style={textColor} to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer style={textColor} to="/lore">
              <Nav.Link>Lore</Nav.Link>
            </LinkContainer>
            <LinkContainer style={textColor} to="/gamerules">
              <Nav.Link>Game Rules</Nav.Link>
            </LinkContainer>
            <LinkContainer style={textColor} to="/factions">
              <Nav.Link>Factions</Nav.Link>
            </LinkContainer>
            <LinkContainer style={textColor} to="/bestiary">
              <Nav.Link>Bestiary</Nav.Link>
            </LinkContainer>
          </Nav>
          {this.getUser()}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(Header);
