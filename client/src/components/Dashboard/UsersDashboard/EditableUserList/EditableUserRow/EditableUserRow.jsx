import React from 'react';
import AdminUserForm from './AdminUserForm';
import UserRow from './UserRow/UserRow';

const EditableUserRow = (props) => {
  const {
    firstName, lastName, isAdmin, setEditKey, faction,
  } = props;
  if (props.editKey === props.cognitoID) {
    return (
      <AdminUserForm
        {...props}
        onFormClose={() => setEditKey('')}
      />
    );
  }
  return (
    <UserRow
      firstName={firstName}
      lastName={lastName}
      faction={faction}
      isAdmin={isAdmin}
      onFormOpen={() => setEditKey(props.cognitoID)}
    />
  );
};

export default EditableUserRow;
