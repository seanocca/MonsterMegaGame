import React from 'react';
import { Card } from 'react-bootstrap';
import Clamberer from '../images/monsters/clamberer.png';

const EditableBeastCard = (props) => {
  const { name, desc, move, damage, maxdmg, leap, maxleap, hp, maxhp, speed, maxspeed } = props;
  return (
    <Card style={{ width: '18rem', height: 'auto' }}>
      {/* placeholder image */}
      <Card.Img variant="top" src={Clamberer} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
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
