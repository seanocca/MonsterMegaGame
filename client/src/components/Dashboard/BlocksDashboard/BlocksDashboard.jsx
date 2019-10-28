import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';

import { createBlock, editBlock } from '../../../store/actions';
import Dashboard from '../Dashboard';
import EditableBlocksList from './EditableBlocksList';
import ToggleableBlockForm from './ToggleableBlockForm';

const BlocksDashboard = () => {
  const blocks = useSelector(state => state.blocks);
  const dispatch = useDispatch();

  const handleCreateFormSubmit = (block) => {
    dispatch(createBlock(block));
  };

  const handleEditFormSubmit = (block) => {
    dispatch(editBlock(block));
  };

  return (
    <Container style={{ padding: '4rem 0' }}>
      <Dashboard />
      <h1>Factions</h1>
      <ToggleableBlockForm
        onFormSubmit={handleCreateFormSubmit}
      />
      <EditableBlocksList
        blocks={blocks}
        onFormSubmit={handleEditFormSubmit}
      />
    </Container>
  );
};

export default BlocksDashboard;
