import React from 'react';
import { Container, Table } from 'react-bootstrap';
// TODO: use useDispatch functions for CRUD actions
import { useSelector } from 'react-redux';
import Dashboard from '../pages/Dashboard';
import AdminBeast from './AdminBeast';

const BeastsDashboard = () => {
  const beasts = useSelector((state) => state.beasts);
  const beastComponents = beasts.map((factionBeasts) => (factionBeasts.beasts.map((beast) => 
    <AdminBeast
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
      <Table bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Desc</th>
            <th>Move</th>
            <th>Dmg</th>
            <th>Max Dmg</th>
            <th>Leap</th>
            <th>Max Leap</th>
            <th>HP</th>
            <th>Max HP</th>
            <th>Speed</th>
            <th>Max Speed</th>
          </tr>
        </thead>
      </Table>      
      <div>
        {beastComponents}
      </div>
    </Container>
  );
};

export default BeastsDashboard;
