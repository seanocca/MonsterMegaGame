import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

import Dashboard from './Dashboard';
import EditableFactionsList from '../components/EditableFactionsList';

const FactionsDashboard = () => {
  const factions = useSelector(state => state.factions);

  return (
    <Container style={{ padding: '4rem 0' }}>
      <Dashboard />
      <h1>Factions</h1>
      <EditableFactionsList factions={factions} />
    </Container>
  );
};

export default FactionsDashboard;
