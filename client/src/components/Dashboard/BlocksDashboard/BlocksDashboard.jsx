import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';

import EditableBlocksList from './EditableBlocksList/EditableBlockList';
import Dashboard from '../Dashboard';

import { loadBlocks } from '../../../store/actions';

const BlocksDashboard = () => {
  const dispatch = useDispatch();
  const blocks = useSelector(state => state.blocks);

  if (!blocks) dispatch(loadBlocks());

  return (
    <Container style={{ padding: '4rem 0' }}>
      <Dashboard />
      <h1>Blocks</h1>
      <EditableBlocksList blocks={blocks} />
    </Container>
  );
};

export default BlocksDashboard;
