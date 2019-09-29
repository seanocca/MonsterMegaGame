import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

import EditableUserRow from './EditableUserRow/EditableUserRow';

const EditableUserList = (props) => {
  const [editKey, setEditKey] = useState('');

  const users = (props.users)
    ? props.users.map(user => (
      <EditableUserRow
        key={user.cognitoID}
        {...user}
        editKey={editKey}
        setEditKey={setEditKey}
      />
    ))
    : (
      <tr>
        <td>Downloading...</td>
      </tr>
    );

  return (
    <Table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Edit User</th>
        </tr>
      </thead>
      <tbody>
        {users}
      </tbody>
    </Table>
  );
};

export default EditableUserList;
