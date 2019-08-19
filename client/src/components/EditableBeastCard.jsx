import React, { useState } from 'react';
import BeastForm from './BeastForm';
import BeastCard from './BeastCard';

const EditableBeastCard = (props) => {
  const [editFormOpen, setEditFormOpen] = useState(false);
  if (editFormOpen) {
    return (
      <BeastForm
        {...props}
        onFormClose={() => setEditFormOpen(false)}
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
