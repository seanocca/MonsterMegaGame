import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';

import { loadRift, loadOverview } from '../store/actions';
import LoreInfo from '../components/LoreInfo';

const Lore = () => {
  const dispatch = useDispatch();
  dispatch(loadRift());
  dispatch(loadOverview());

  return (
    <Container style={{ padding: '4rem 1rem' }}>
      <LoreInfo />
    </Container>
  );
};

export default Lore;
