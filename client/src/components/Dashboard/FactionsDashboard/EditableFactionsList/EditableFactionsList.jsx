import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

import EditableFactionRow from './EditableFactionRow';

const EditableFactionsList = (props) => {
  const [editFormOpen, setEditFormOpen] = useState('');
  const { onFormSubmit } = props;
  const factions = props.factions.map(faction => (
    <EditableFactionRow
      {...faction}
      onFormSubmit={onFormSubmit}
      key={faction.id}
      editFormOpen={editFormOpen}
      setEditFormOpen={setEditFormOpen}
    />
  ));

  return (
    <Table>
      <thead>
        <tr>
          <th>Faction Name</th>
          <th>Faction Leader</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {factions}
      </tbody>
    </Table>
  );
};

export default EditableFactionsList;
