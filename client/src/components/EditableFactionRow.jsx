import React, { useState } from 'react';
import AdminFactionForm from './AdminFactionForm';
import FactionRow from './FactionRow';

const EditableFactionRow = (props) => {
  const [editFormOpen, setEditFormOpen] = useState(false);
  const { name, leader, onFormSubmit } = props;

  const handleSubmit = (faction) => {
    onFormSubmit(faction);
    setEditFormOpen(false);
  };

  if (editFormOpen) {
    return (
      <AdminFactionForm
        {...props}
        onFormClose={() => setEditFormOpen(false)}
        onFormSubmit={handleSubmit}
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
