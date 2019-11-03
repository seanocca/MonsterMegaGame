import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import AdminBlockForm from './AdminBlockForm';

const ToggleableBlockForm = (props) => {
  const [formOpen, setFormOpen] = useState(false);
  const { onFormSubmit } = props;

  const handleFormOpen = () => {
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
  };

  const handleFormSubmit = (block) => {
    onFormSubmit(block);
    setFormOpen(false);
  };

  if (formOpen) {
    return (
      <AdminBlockForm
        onFormSubmit={handleFormSubmit}
        onFormClose={handleFormClose}
      />
    );
  }
  return (
    <Button type="button" onClick={handleFormOpen}>Add new Block</Button>
  );
};

export default ToggleableBlockForm;
