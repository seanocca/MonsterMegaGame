import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';

import { loadFactions, createFaction, editFaction } from '../../../store/actions';
import Dashboard from '../Dashboard';
import EditableFactionsList from './EditableFactionsList';
import ToggleableFactionForm from './ToggleableFactionForm';

const FactionsDashboard = () => {
  const factions = useSelector(state => state.factions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFactions());
  });

  const handleCreateFormSubmit = (faction) => {
    dispatch(createFaction(faction));
  };

  const handleEditFormSubmit = (faction) => {
    dispatch(editFaction(faction));
  };

  return (
    <Container style={{ padding: '4rem 0' }}>
      <Dashboard />
      <h1>Factions</h1>
      <ToggleableFactionForm
        onFormSubmit={handleCreateFormSubmit}
      />
      <EditableFactionsList
        factions={factions}
        onFormSubmit={handleEditFormSubmit}
      />
    </Container>
  );
};

export default FactionsDashboard;
