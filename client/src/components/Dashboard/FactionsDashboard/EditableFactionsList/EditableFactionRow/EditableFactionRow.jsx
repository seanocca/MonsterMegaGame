import React from 'react';
import { useDispatch } from 'react-redux';
import AdminFactionForm from '../../ToggleableFactionForm/AdminFactionForm';
import FactionRow from './FactionRow';
import { deleteFaction } from '../../../../../store/actions';

const EditableFactionRow = (props) => {
  const dispatch = useDispatch();
  const {
    name, leader, onFormSubmit, setEditFormOpen,
  } = props;

  const handleSubmit = (faction) => {
    onFormSubmit(faction);
    setEditFormOpen('');
  };

  const handleDelete = () => dispatch(deleteFaction(props));

  if (props.editFormOpen === props.id) {
    return (
      <AdminFactionForm
        {...props}
        onFormClose={() => setEditFormOpen('')}
        onFormSubmit={handleSubmit}
      />
    );
  }
  return (
    <FactionRow
      name={name}
      leader={leader}
      onFormOpen={() => setEditFormOpen(props.id)}
      handleDelete={handleDelete}
    />
  );
};

export default EditableFactionRow;
