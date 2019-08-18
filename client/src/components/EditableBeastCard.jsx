import React from 'react';
import { Card } from 'react-bootstrap';
import Clamberer from '../images/monsters/clamberer.png';

const factionImagePathPrefix = '/img/factions/';

const useFactionCardStyles = (faction) => {
  let border = '';
  switch (faction) {
    case 'Voidborn':
      border = 'solid 10px purple';
      break;
    case 'Mechanica':
      border = 'solid 10px orange';
      break;
    case 'Gatekeepers':
      border = 'solid 10px black';
      break;
    case 'Biochrondys':
      border = 'solid 10px green';
      break;
    default:
      // do nothing
  }
  return {
    width: '18rem',
    height: 'auto',
    border
  }
}

const EditableBeastCard = (props) => {
  const { faction, name, desc, move, damage, maxdmg, leap, maxleap, hp, maxhp, speed, maxspeed } = props;
  const factionImagePath = factionImagePathPrefix + faction.toLowerCase() + '.png';
  const factionStyles = useFactionCardStyles(faction);
  return (
    <Card bg="dark" text="white" style={factionStyles}>
      {/* placeholder image */}
      <Card.Img variant="top" src={Clamberer} />
      <Card.Body>
        <Card.Title>{faction} - {name} <img src={factionImagePath} style={{ height: '1.3rem' }} /></Card.Title>
        <Card.Text>
          {desc}
          <br />
          <strong>DMG: </strong> {damage}/{maxdmg} <strong>SPD: </strong> {speed}/{maxspeed} <br />
          <strong>LEAP:</strong> {leap}/{maxleap} <strong>HP: </strong> {hp}/{maxhp} <br />
          <strong>MOVE: </strong>{move}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        {/* Link currently not working yet */}
        <a href="">Edit Beast</a>
      </Card.Footer>
    </Card>
  );
};

export default EditableBeastCard;
