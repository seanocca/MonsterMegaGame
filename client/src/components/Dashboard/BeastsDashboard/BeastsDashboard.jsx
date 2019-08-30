import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, CardColumns } from 'react-bootstrap';

import { loadBeasts, createBeast, editBeast } from '../../../store/actions';
import Dashboard from '../Dashboard';
import EditableBeastList from './EditableBeastList';
import ToggleableBeastForm from './ToggleableBeastForm';

const BeastsDashboard = () => {
  const beasts = useSelector(state => state.beasts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBeasts());
  });

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
      <CardColumns>
        <EditableBeastList
          beasts={beasts}
          onFormSubmit={handleEditFormSubmit}
        />
      </CardColumns>
    </Container>
  );
};

export default BeastsDashboard;
