import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';

import { loadAugments, createAugment, editAugment } from '../../../store/actions';
import Dashboard from '../Dashboard';
import EditableAllAugmentsList from './EditableAllAugmentsList';
import ToggleableAugmentForm from './ToggleableAugmentForm';

const AugmentsDashboard = () => {
  const allAugments = useSelector(state => state.augments);
  const dispatch = useDispatch();

  dispatch(loadAugments());

  const handleCreateFormSubmit = (augment) => {
    dispatch(createAugment(augment));
  };

  const handleEditFormSubmit = (augment) => {
    dispatch(editAugment(augment));
  };

  return (
    <Container style={{ padding: '4rem 0' }}>
      <Dashboard />
      <h1>Augments</h1>
      <ToggleableAugmentForm
        onFormSubmit={handleCreateFormSubmit}
      />
      <EditableAllAugmentsList
        allAugments={allAugments}
        onFormSubmit={handleEditFormSubmit}
      />
    </Container>
  );
};

export default AugmentsDashboard;
