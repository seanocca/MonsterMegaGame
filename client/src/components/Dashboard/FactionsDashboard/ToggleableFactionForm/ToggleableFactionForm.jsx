import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
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
    <Button type="button" onClick={handleFormOpen}>Add new Faction</Button>
  );
};

export default ToggleableFactionForm;
