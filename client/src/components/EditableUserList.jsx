import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import EditableUser from './EditableUser';

class EditableUserList extends Component {
  render() {
    const users = this.props.users.map((user) => (
      <EditableUser
        key={user.key}
        firstName={user.firstName}
        lastName={user.lastName}
      />
    ));

    return <Container>{users}</Container>;
  }
}

export default EditableUserList;
