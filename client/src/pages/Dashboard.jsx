import React, { Component } from 'react';
import { Container, Nav } from 'react-bootstrap';

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Nav variant="tabs" defaultActiveKey="admin">
          <Nav.Item>
            <Nav.Link eventKey="admin">Admin</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="user-data">User Data</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="game-data">Game Data</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="beasts">Beasts</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="factions">Factions</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    );
  }
}

export default Dashboard;
