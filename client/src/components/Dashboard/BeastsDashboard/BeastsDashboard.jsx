import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';

import { createBeast, editBeast } from '../../../store/actions';
import Dashboard from '../Dashboard';
import EditableAllBeastsList from './EditableAllBeastsList';
import ToggleableBeastForm from './ToggleableBeastForm';

const BeastsDashboard = () => {
  const allBeasts = useSelector(state => state.beasts);
  const dispatch = useDispatch();

  const handleCreateFormSubmit = (beast) => {
    dispatch(createBeast(beast));
  };

  const handleEditFormSubmit = (beast) => {
    dispatch(editBeast(beast));
  };

  return (
    <Container style={{ padding: '4rem 0' }}>
      <Dashboard />
      <h1>Beasts</h1>
      <ToggleableBeastForm
        onFormSubmit={handleCreateFormSubmit}
      />
      <EditableAllBeastsList
        allBeasts={allBeasts}
        onFormSubmit={handleEditFormSubmit}
      />
    </Container>
  );
};

export default BeastsDashboard;
