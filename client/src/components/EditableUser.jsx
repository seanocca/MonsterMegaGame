import React, { Component } from 'react';

import AdminUserForm from './AdminUserForm';
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
        <AdminUserForm
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
