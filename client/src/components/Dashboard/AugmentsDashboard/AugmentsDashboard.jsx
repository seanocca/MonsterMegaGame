import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, CardColumns } from 'react-bootstrap';

import { loadAugments, createAugment, editAugment } from '../../../store/actions';
import Dashboard from '../Dashboard';
import EditableAugmentList from './EditableAugmentList';
import ToggleableAugmentForm from './ToggleableAugmentForm';

const AugmentsDashboard = () => {
  const augments = useSelector(state => state.augments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAugments());
  });

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
      <CardColumns>
        <EditableAugmentList
          augments={augments}
          onFormSubmit={handleEditFormSubmit}
        />
      </CardColumns>
    </Container>
  );
};

export default AugmentsDashboard;
