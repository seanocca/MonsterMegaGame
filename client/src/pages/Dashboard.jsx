import React, { Component } from 'react';
import { Container, Nav } from 'react-bootstrap';

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Nav variant="tabs" defaultActiveKey="admin">
          <Nav.Item>
            <Nav.Link href="/dashboard/admin">Admin</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/dashboard/users">Users</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/dashboard/game">Game Data</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/dashboard/beasts">Beasts</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/dashboard/augments">Augments</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/dashboard/factions">Factions</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    );
  }
}

export default Dashboard;
