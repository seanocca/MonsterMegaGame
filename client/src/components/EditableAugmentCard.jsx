import React, { useState } from 'react';
import AugmentForm from './AugmentForm';
import AugmentCard from './AugmentCard';

const EditableAugmentCard = (props) => {
  const [editFormopen, setEditFormOpen] = useState(false);
  const {
    faction, name, type, action, desc,
  } = props;
  if (editFormopen) {
    return (
      <AugmentForm onFormClose={() => setEditFormOpen(false)} />
    );
  }
  return (
    <AugmentCard
      faction={faction}
      name={name}
      type={type}
      action={action}
      desc={desc}
      onFormOpen={() => setEditFormOpen(true)}
    />
  );
};

export default EditableAugmentCard;
