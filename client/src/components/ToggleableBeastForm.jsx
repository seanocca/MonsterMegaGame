import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import BeastCardForm from './BeastForm';

const ToggleableBeastForm = (props) => {
  const [formOpen, setFormOpen] = useState(false);
  const { onFormSubmit } = props;

  const handleFormOpen = () => {
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
  };

  const handleFormSubmit = (beast) => {
    onFormSubmit(beast);
    setFormOpen(false);
  };

  if (formOpen) {
    return (
      <BeastCardForm
        onFormSubmit={handleFormSubmit}
        onFormClose={handleFormClose}
      />
    );
  }
  return (
    <button type="button" onClick={handleFormOpen}>Add new beast</button>
  );
};

export default ToggleableBeastForm;
