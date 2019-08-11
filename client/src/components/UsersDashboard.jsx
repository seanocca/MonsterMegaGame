import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import EditableUserList from './EditableUserList';
import Dashboard from '../pages/Dashboard';

class UsersDashboard extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.loadUsersFromServer();
  }

  loadUsersFromServer = () => {
    this.setState({ users: [{ firstName: 'John', lastName: 'Smith' }] });
  };

  render() {
    const { users } = this.state;
    return (
      <Container>
        <Dashboard />
        <EditableUserList users={users} />
      </Container>
    );
  }
}

export default UsersDashboard;
