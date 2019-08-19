import React, { useState } from 'react';
import AdminUserForm from './AdminUserForm';
import UserRow from './UserRow';

const EditableUserRow = (props) => {
  const [editFormOpen, setEditFormOpen] = useState(false);
  const {
    firstName, lastName, email, address, city, state, postcode,
  } = props;
  console.log(props);
  if (editFormOpen) {
    return (
      <AdminUserForm
        firstName={firstName}
        lastName={lastName}
        email={email}
        address={address}
        city={city}
        state={state}
        postcode={postcode}
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
