import React from 'react';
import { Container, CardColumns } from 'react-bootstrap';
// TODO: use useDispatch functions for CRUD actions
import { useSelector } from 'react-redux';
import Dashboard from '../pages/Dashboard';
import EditableBeastCard from './EditableBeastCard';

const BeastsDashboard = () => {
  const beasts = useSelector((state) => state.beasts);
  const beastComponents = beasts.map((factionBeasts) => (factionBeasts.beasts.map((beast) => 
    <EditableBeastCard
      faction={factionBeasts.faction}
      name={beast.name}
      desc={beast.desc}
      move={beast.move}
      damage={beast.damage}
      maxdmg={beast.maxdmg}
      leap={beast.leap}
      maxleap={beast.maxleap}
      hp={beast.hp}
      maxhp={beast.maxhp}
      speed={beast.speed}
      maxspeed={beast.maxspeed}
    />
  )
  ))
  return (
    <Container>
    <Dashboard />
      <h1>Beasts</h1>
      <CardColumns>
        {beastComponents}
      </CardColumns>
    </Container>
  );
};

export default BeastsDashboard;
