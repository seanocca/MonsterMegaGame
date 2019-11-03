import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AdminBeastForm from '../../../ToggleableBeastForm/AdminBeastForm';
import BeastCard from './BeastCard';
import { deleteBeast } from '../../../../../../store/actions';

const EditableBeastCard = (props) => {
  const dispatch = useDispatch();
  const [editFormOpen, setEditFormOpen] = useState(false);
  const { onFormSubmit } = props;

  const handleSubmit = (beast) => {
    onFormSubmit(beast);
    setEditFormOpen(false);
  };

  const handleDelete = () => dispatch(deleteBeast(props));

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
      handleDelete={handleDelete}
    />
  );
};

export default EditableBeastCard;
