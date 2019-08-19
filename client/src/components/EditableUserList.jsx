import React from 'react';
import { Table } from 'react-bootstrap';

import EditableUserRow from './EditableUserRow';

const EditableUserList = (props) => {
  const users = props.users.map(user => (
    <EditableUserRow
      {...user}
    />
  ));

  return (
    <Table>
      <thead>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Edit User</th>
      </thead>
      <tbody>
        {users}
      </tbody>
    </Table>
  );
};

export default EditableUserList;
