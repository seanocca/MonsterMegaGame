import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

import EditableUserList from '../components/EditableUserList';
import Dashboard from './Dashboard';

const UsersDashboard = () => {
  const users = useSelector(state => state.users);

  return (
    <Container style={{ padding: '4rem 0' }}>
      <Dashboard />
      <h1>Users</h1>
      <EditableUserList users={users} />
    </Container>
  );
};

export default UsersDashboard;
