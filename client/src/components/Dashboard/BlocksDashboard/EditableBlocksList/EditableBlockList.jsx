import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

import EditableBlockRow from './EditableBlockRow/EditableBlockRow';

const EditableBlockList = (props) => {
  const [editKey, setEditKey] = useState('');

  const blocks = (props.blocks)
    ? props.blocks.map(block => (
      <EditableBlockRow
        key={block.cognitoID}
        {...block}
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
          <th>Name</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Edit Block</th>
        </tr>
      </thead>
      <tbody>
        {blocks}
      </tbody>
    </Table>
  );
};

export default EditableBlockList;
