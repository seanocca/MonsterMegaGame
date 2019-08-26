import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import AdminAugmentForm from './AdminAugmentForm';

const ToggleableAugmentForm = (props) => {
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
      <AdminAugmentForm
        onFormSubmit={handleFormSubmit}
        onFormClose={handleFormClose}
      />
    );
  }
  return (
    <Button type="button" onClick={handleFormOpen}>Add new Augment</Button>
  );
};

export default ToggleableAugmentForm;
