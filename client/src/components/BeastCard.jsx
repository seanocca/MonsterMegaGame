import React from 'react';
import { Card } from 'react-bootstrap';

import { useFactionCardStyles } from '../helpers/hooks';
import Clamberer from '../images/monsters/clamberer.png';

const factionImagePathPrefix = '/img/factions/';

const BeastCard = (props) => {
  const {
    faction, name, desc, move, damage, maxdmg, leap, maxleap, hp, maxhp, speed, maxspeed,
  } = props;
  const factionStyles = useFactionCardStyles(faction);
  const factionImagePath = `${factionImagePathPrefix + faction.toLowerCase()}.png`;
  const altTag = `${faction} - ${name}`;
  return (
    <Card bg="dark" text="white" style={factionStyles}>
      <Card.Header>{faction} <img src={factionImagePath} alt={altTag} style={{ height: '1.3rem' }} /></Card.Header>
      {/* placeholder image */}
      <Card.Img variant="top" src={Clamberer} style={{ height: '20rem' }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{desc}</Card.Subtitle>
        <Card.Text>
          <strong>DMG: </strong> {damage}/{maxdmg} <strong>SPD: </strong> {speed}/{maxspeed} <br />
          <strong>LEAP:</strong> {leap}/{maxleap} <strong>HP: </strong> {hp}/{maxhp} <br />
          <strong>MOVE: </strong>{move}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        {/* Link currently not working yet */}
        <a href="/#">Edit Beast</a>
      </Card.Footer>
    </Card>
  );
};

export default BeastCard;
