import React from 'react';
import { Button } from 'react-bootstrap';

const UserRow = (props) => {
  const {
    firstName, lastName, onFormOpen, isAdmin, faction,
  } = props;

  const superAdmin = (firstName === 'Super' && lastName === 'Admin');
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{faction}</td>
      <td>{(isAdmin) ? 'Yes' : 'No'}</td>
      <td>{(!superAdmin)
        ? <Button type="button" disabled={superAdmin} onClick={onFormOpen}>Edit User</Button>
        : <Button disabled={superAdmin}>Display Only</Button>}
      </td>
    </tr>
  );
};

export default UserRow;
