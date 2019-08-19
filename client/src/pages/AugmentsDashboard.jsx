import React, { useEffect } from 'react';
// TODO: use useDispatch functions for CRUD actions
import { useSelector } from 'react-redux';
import { Container, CardColumns } from 'react-bootstrap';

import Dashboard from './Dashboard';
import EditableAugmentList from '../components/EditableAugmentList';
import ToggleableAugmentForm from '../components/ToggleableAugmentForm';

const AugmentsDashboard = () => {
  const augments = useSelector(state => state.augments);
  // const dispatch = useDispatch();

  useEffect(() => {
    loadAugmentsFromServer();
  }, [augments]);


  const loadAugmentsFromServer = () => {
    // dispatch fetch all augments redux action
  };

  const handleCreateFormSubmit = (augment) => {
    createAugment(augment);
  };

  const handleEditFormSubmit = (augment) => {
    editAugment(augment);
  };

  const createAugment = (augment) => {
    // dispatch create augment redux action with augment details
  };

  const editAugment = (augment) => {
    // dispatch edit augment redux action with augment details
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
