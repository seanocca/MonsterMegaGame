import React, { useState } from 'react';
import AdminAugmentForm from '../../ToggleableAugmentForm/AdminAugmentForm';
import AugmentCard from './AugmentCard';

const EditableAugmentCard = (props) => {
  const [editFormopen, setEditFormOpen] = useState(false);
  const { onFormSubmit } = props;

  const handleSubmit = (augment) => {
    onFormSubmit(augment);
    setEditFormOpen(false);
  };

  if (editFormopen) {
    return (
      <AdminAugmentForm
        {...props}
        onFormClose={() => setEditFormOpen(false)}
        onFormSubmit={handleSubmit}
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
