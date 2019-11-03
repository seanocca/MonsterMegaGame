import React from 'react';
import { useDispatch } from 'react-redux';
import AdminBlockForm from '../../ToggleableBlockForm/AdminBlockForm';
import BlockRow from './BlockRow';
import { deleteBlock } from '../../../../../store/actions';

const EditableBlockRow = (props) => {
  const dispatch = useDispatch();
  const {
    name, latitude, longitude, onFormSubmit, setEditFormOpen,
  } = props;

  const handleSubmit = (block) => {
    onFormSubmit(block);
    setEditFormOpen('');
  };

  const handleDelete = () => dispatch(deleteBlock(props));

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
      handleDelete={handleDelete}
    />
  );
};

export default EditableBlockRow;
