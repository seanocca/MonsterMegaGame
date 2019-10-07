import React from 'react';
import AdminUserForm from './AdminUserForm';
import UserRow from './UserRow/UserRow';

const EditableUserRow = (props) => {
  const { firstName, lastName, isAdmin } = props;
  if (props.editKey === props.cognitoID) {
    return (
      <AdminUserForm
        {...props}
        onFormClose={() => props.setEditKey('')}
      />
    );
  }
  return (
    <UserRow
      firstName={firstName}
      lastName={lastName}
      isAdmin={isAdmin}
      onFormOpen={() => props.setEditKey(props.cognitoID)}
    />
  );
};

export default EditableUserRow;
