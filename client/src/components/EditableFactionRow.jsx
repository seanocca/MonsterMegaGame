import React, { useState } from 'react';
import AdminFactionForm from './AdminFactionForm';
import FactionRow from './FactionRow';

const EditableFactionRow = (props) => {
  const [editFormOpen, setEditFormOpen] = useState(false);
  const {
    name, leader, faculty, desc,
  } = props;
  if (editFormOpen) {
    return (
      <AdminFactionForm
        name={name}
        leader={leader}
        faculty={faculty}
        desc={desc}
        onFormClose={() => setEditFormOpen(false)}
      />
    );
  }
  return (
    <FactionRow
      name={name}
      leader={leader}
      onFormOpen={() => setEditFormOpen(true)}
    />
  );
};

export default EditableFactionRow;
