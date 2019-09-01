import React, { useState } from 'react';
import AdminBeastForm from '../../../ToggleableBeastForm/AdminBeastForm';
import BeastCard from './BeastCard';

const EditableBeastCard = (props) => {
  const [editFormOpen, setEditFormOpen] = useState(false);
  const { onFormSubmit } = props;

  const handleSubmit = (beast) => {
    onFormSubmit(beast);
    setEditFormOpen(false);
  };

  if (editFormOpen) {
    return (
      <AdminBeastForm
        {...props}
        onFormClose={() => setEditFormOpen(false)}
        onFormSubmit={handleSubmit}
      />
    );
  }
  return (
    <BeastCard
      {...props}
      onFormOpen={() => setEditFormOpen(true)}
    />
  );
};

export default EditableBeastCard;
