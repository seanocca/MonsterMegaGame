import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';

import { loadBeasts } from '../store/actions';
import BestiaryAccordion from '../components/BestiaryComponent';

const Bestiary = () => {
  const dispatch = useDispatch();
  dispatch(loadBeasts());

  return (
    <Container style={{ padding: '4rem 0' }}>
      <BestiaryAccordion />
    </Container>
  );
};

export default Bestiary;
