import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Dashboard = () => (
  <Container>
    <Nav variant="tabs">
      <Nav.Item>
        <LinkContainer to="/dashboard/users">
          <Nav.Link>Users</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/dashboard/beasts">
          <Nav.Link>Beasts</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/dashboard/augments">
          <Nav.Link>Augments</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/dashboard/factions">
          <Nav.Link>Factions</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  </Container>
);

export default Dashboard;
