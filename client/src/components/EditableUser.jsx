import React, { Component } from 'react';

import UserForm from './UserForm';
import User from './User';

class EditableUser extends Component {
  state = {
    editFormOpen: false,
  };

  render() {
    const { editFormOpen } = this.state;
    const { firstName, lastName } = this.props;
    if (editFormOpen) {
      return (
        <UserForm
          key="nothing"
          id="nothing"
          firstName={firstName}
          lastName={lastName}
        />
      );
    }
    return (
      <User
        key="nothing"
        id="nothing"
        firstName={firstName}
        lastName={lastName}
      />
    );
  }
}

export default EditableUser;
