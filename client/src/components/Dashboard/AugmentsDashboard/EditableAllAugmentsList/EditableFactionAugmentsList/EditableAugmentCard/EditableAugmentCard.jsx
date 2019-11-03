import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AdminAugmentForm from '../../../ToggleableAugmentForm/AdminAugmentForm';
import AugmentCard from './AugmentCard';
import { deleteAugment } from '../../../../../../store/actions';

const EditableAugmentCard = (props) => {
  const dispatch = useDispatch();
  const [editFormopen, setEditFormOpen] = useState(false);
  const { onFormSubmit } = props;

  const handleSubmit = (augment) => {
    onFormSubmit(augment);
    setEditFormOpen(false);
  };

  const handleDelete = () => dispatch(deleteAugment(props));

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
      handleDelete={handleDelete}
    />
  );
};

export default EditableAugmentCard;
