import React, { useEffect } from 'react';
// TODO: use useDispatch functions for CRUD actions
import { useSelector, useDispatch } from 'react-redux';
import { Container, CardColumns } from 'react-bootstrap';

import Dashboard from './Dashboard';
import EditableBeastList from '../components/EditableBeastList';
import ToggleableBeastForm from '../components/ToggleableBeastForm';

const BeastsDashboard = () => {
  const beasts = useSelector(state => state.beasts);
  // const dispatch = useDispatch();

  useEffect(() => {
    loadBeastsFromServer();
  }, [beasts]);


  const loadBeastsFromServer = () => {
    // dispatch fetch all beasts redux action
  };

  const handleCreateFormSubmit = (beast) => {
    createBeast(beast);
  };

  const handleEditFormSubmit = (beast) => {
    editBeast(beast);
  };

  const createBeast = (beast) => {
    // dispatch create beast redux action with beast details
  };

  const editBeast = (beast) => {
    // dispatch edit beast redux action with beast details
  };

  return (
    <Container>
      <Dashboard />
      <h1>Beasts</h1>
      <CardColumns>
        <EditableBeastList
          beasts={beasts}
          onFormSubmit={handleEditFormSubmit}
        />
      </CardColumns>
      <ToggleableBeastForm
        onFormSubmit={handleCreateFormSubmit}
      />
    </Container>
  );
};

export default BeastsDashboard;
