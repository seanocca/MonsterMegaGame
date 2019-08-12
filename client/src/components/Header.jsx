import React, { Component } from 'react';
import {
  Navbar, Nav, NavDropdown, Image,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { userHasAuthenticated } from '../store/actions';

import Logo from '../images/hmgLogo.png';

const mapStateToProps = (state) => {
  const { isAuthenticated } = state;
  return {
    isAuthenticated,
  };
};

// eslint-disable-next-line arrow-body-style
const mapDispatchToProps = (dispatch) => {
  return {
    userAuthenticated: auth => dispatch(userHasAuthenticated(auth)),
  };
};

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
  handleLogout = event => this.props.userAuthenticated(false);

  loginState = () => (this.props.isAuthenticated
    ? (
      <NavDropdown
        style={textColor}
        title="User###"
        id="basic-nav-dropdown"
        className="justify-content-right"
      >
        <NavDropdown.Item style={textColor} href="#details">User Details</NavDropdown.Item>
        <NavDropdown.Item style={textColor} href="#action">Change Faction</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item style={textColor} onClick={this.handleLogout}>Log Out</NavDropdown.Item>
      </NavDropdown>
    ) : (
      <LinkContainer className="justify-content-right" style={textColor} to="/login">
        <Nav.Link>Sign In/Sign Up</Nav.Link>
      </LinkContainer>
    ));

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
          {this.loginState()}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
