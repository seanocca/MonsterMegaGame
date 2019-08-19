import React, { useState } from 'react';
import AugmentForm from './AugmentForm';
import AugmentCard from './AugmentCard';

const EditableAugmentCard = (props) => {
  const [editFormopen, setEditFormOpen] = useState(false);
  if (editFormopen) {
    return (
      <AugmentForm
        {...props}
        onFormClose={() => setEditFormOpen(false)}
      />
    );
  }
  return (
    <AugmentCard
      {...props}
      onFormOpen={() => setEditFormOpen(true)}
    />
  );
};

export default EditableAugmentCard;
