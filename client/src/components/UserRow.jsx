import React from 'react';

const UserRow = (props) => {
  const {
    firstName, lastName, onFormOpen,
  } = props;
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td><button type="button" onClick={onFormOpen}>Edit User</button></td>
    </tr>
  );
};

export default UserRow;
