import React, { useState } from 'react';
import AdminFactionForm from './AdminFactionForm';
import FactionRow from './FactionRow';

const EditableFactionRow = (props) => {
  const [editFormOpen, setEditFormOpen] = useState(false);
  const { name, leader } = props;
  const desc = props.desc.join('\n\n');
  if (editFormOpen) {
    return (
      <AdminFactionForm
        {...props}
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
