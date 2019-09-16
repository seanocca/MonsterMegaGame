/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Container } from 'react-bootstrap';

import FactionAccordion from '../components/FactionAccordion';

const Factions = () => (
  <Container style={{ padding: '4rem 0' }}>
    <FactionAccordion />
  </Container>
);

export default Factions;
