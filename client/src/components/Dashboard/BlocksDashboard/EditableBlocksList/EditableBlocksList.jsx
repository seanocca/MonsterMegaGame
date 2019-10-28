import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

import EditableBlockRow from './EditableBlockRow';

const EditableBlocksList = (props) => {
  const [editFormOpen, setEditFormOpen] = useState('');
  const { onFormSubmit } = props;

  const blocks = props.blocks.map(block => (
    <EditableBlockRow
      {...block}
      onFormSubmit={onFormSubmit}
      key={block.id}
      editFormOpen={editFormOpen}
      setEditFormOpen={setEditFormOpen}
    />
  ));

  return (
    <Table>
      <thead>
        <tr>
          <th>Block Name</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Edit block</th>
        </tr>
      </thead>
      <tbody>
        {blocks}
      </tbody>
    </Table>
  );
};

export default EditableBlocksList;
