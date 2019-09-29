import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';

import EditableUserList from './EditableUserList/EditableUserList';
import Dashboard from '../Dashboard';

import { getAllUsers } from '../../../store/actions';

const UsersDashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  if (!users) dispatch(getAllUsers());

  return (
    <Container style={{ padding: '4rem 0' }}>
      <Dashboard />
      <h1>Users</h1>
      <EditableUserList users={users} />
    </Container>
  );
};

export default UsersDashboard;
