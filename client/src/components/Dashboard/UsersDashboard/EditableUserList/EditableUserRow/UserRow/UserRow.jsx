import React from 'react';
import { Button } from 'react-bootstrap';

const UserRow = (props) => {
  const {
    firstName, lastName, onFormOpen, isAdmin,
  } = props;
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td><Button type="button" onClick={onFormOpen}>Edit User</Button></td>
      <td>{(isAdmin) ? 'Yes' : 'No'}</td>
    </tr>
  );
};

export default UserRow;
