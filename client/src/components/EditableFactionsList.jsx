import React from 'react';
import { Table } from 'react-bootstrap';

import EditableFactionRow from './EditableFactionRow';

const EditableFactionsList = (props) => {
  const factions = props.factions.map(faction => (
    <EditableFactionRow
      {...faction}
    />
  ));

  return (
    <Table>
      <thead>
        <th>Faction Name</th>
        <th>Faction Leader</th>
        <th>Edit Faction</th>
      </thead>
      <tbody>
        {factions}
      </tbody>
    </Table>
  );
};

export default EditableFactionsList;
