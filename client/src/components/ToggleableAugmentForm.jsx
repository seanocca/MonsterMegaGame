import React, { useState } from 'react';
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
    <button type="button" onClick={handleFormOpen}>Add new Augment</button>
  );
};

export default ToggleableAugmentForm;
