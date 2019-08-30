import React from 'react';
import { Container, Nav } from 'react-bootstrap';

const Dashboard = () => (
  <Container>
    <Nav variant="tabs">
      <Nav.Item>
        <Nav.Link href="/dashboard/users">Users</Nav.Link>
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

export default Dashboard;
