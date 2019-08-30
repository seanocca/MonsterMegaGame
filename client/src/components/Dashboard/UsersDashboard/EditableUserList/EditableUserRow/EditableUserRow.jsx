import React, { useState } from 'react';
import AdminUserForm from './AdminUserForm';
import UserRow from './UserRow/UserRow';

const EditableUserRow = (props) => {
  const [editFormOpen, setEditFormOpen] = useState(false);
  const { firstName, lastName } = props;
  if (editFormOpen) {
    return (
      <AdminUserForm
        {...props}
        onFormClose={() => setEditFormOpen(false)}
      />
    );
  }
  return (
    <UserRow
      firstName={firstName}
      lastName={lastName}
      onFormOpen={() => setEditFormOpen(true)}
    />
  );
};

export default EditableUserRow;
