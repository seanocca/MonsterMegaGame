import React, { useState } from 'react';
import AdminFactionForm from './AdminFactionForm';

const ToggleableFactionForm = (props) => {
  const [formOpen, setFormOpen] = useState(false);
  const { onFormSubmit } = props;

  const handleFormOpen = () => {
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
  };

  const handleFormSubmit = (Augment) => {
    onFormSubmit(Augment);
    setFormOpen(false);
  };

  if (formOpen) {
    return (
      <AdminFactionForm
        onFormSubmit={handleFormSubmit}
        onFormClose={handleFormClose}
      />
    );
  }
  return (
    <button type="button" onClick={handleFormOpen}>Add new Faction</button>
  );
};

export default ToggleableFactionForm;
