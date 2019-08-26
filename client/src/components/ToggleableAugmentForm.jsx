import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import AugmentForm from './AugmentForm';

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
      <AugmentForm
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
