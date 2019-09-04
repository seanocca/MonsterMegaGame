/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';

import { loadFactions } from '../store/actions';
import FactionAccordion from '../components/FactionAccordion';

const Factions = () => {
  const dispatch = useDispatch();
  dispatch(loadFactions());

  return (
    <Container style={{ padding: '4rem 0' }}>
      <FactionAccordion />
    </Container>
  );
};

export default Factions;
