import React from 'react';
import AdminFactionForm from '../../ToggleableFactionForm/AdminFactionForm';
import FactionRow from './FactionRow';

const EditableFactionRow = (props) => {
  const {
    name, leader, onFormSubmit, setEditFormOpen,
  } = props;

  const handleSubmit = (faction) => {
    onFormSubmit(faction);
    setEditFormOpen('');
  };

  if (props.editFormOpen === props.id) {
    return (
      <AdminFactionForm
        {...props}
        onFormClose={() => setEditFormOpen('')}
        onFormSubmit={handleSubmit}
      />
    );
  }
  return (
    <FactionRow
      name={name}
      leader={leader}
      onFormOpen={() => setEditFormOpen(props.id)}
    />
  );
};

export default EditableFactionRow;
