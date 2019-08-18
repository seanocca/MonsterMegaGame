import React from 'react';
import { Container, CardColumns } from 'react-bootstrap';
// TODO: use useDispatch functions for CRUD actions
import { useSelector } from 'react-redux';
import Dashboard from '../pages/Dashboard';
import EditableAugmentCard from './EditableAugmentCard';

const AugmentsDashboard = () => {
  const augments = useSelector((state) => state.augments);
  const augmentComponents = augments.map((factionAugments) =>
    factionAugments.augments.map((augment) => (
      <EditableAugmentCard
        faction={factionAugments.faction}
        name={augment.name}
        type={augment.type}
        action={augment.action}
        desc={augment.desc}
      />
    ))
  );
  return (
    <Container>
      <Dashboard />
      <h1>Augments</h1>
      <CardColumns>{augmentComponents}</CardColumns>
    </Container>
  );
};

export default AugmentsDashboard;
