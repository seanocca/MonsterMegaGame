import React from 'react';
import AdminBlockForm from '../../ToggleableBlockForm/AdminBlockForm';
import BlockRow from './BlockRow';

const EditableBlockRow = (props) => {
  const {
    name, latitude, longitude, onFormSubmit, setEditFormOpen,
  } = props;

  const handleSubmit = (block) => {
    onFormSubmit(block);
    setEditFormOpen('');
  };

  if (props.editFormOpen === props.id) {
    return (
      <AdminBlockForm
        {...props}
        onFormClose={() => setEditFormOpen('')}
        onFormSubmit={handleSubmit}
      />
    );
  }
  return (
    <BlockRow
      name={name}
      latitude={latitude}
      longitude={longitude}
      onFormOpen={() => setEditFormOpen(props.id)}
    />
  );
};

export default EditableBlockRow;
