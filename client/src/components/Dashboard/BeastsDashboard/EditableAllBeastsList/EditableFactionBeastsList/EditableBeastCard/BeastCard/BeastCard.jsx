import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

import { useFactionCardStyles } from '../../../../../../../helpers/hooks';

const factionImagePathPrefix = '/img/factions/';

const BeastCard = (props) => {
  const {
    faction, name, desc, move, damage, maxdmg, leap, image,
    maxleap, hp, maxhp, speed, maxspeed, onFormOpen, handleDelete,
  } = props;
  const factionStyles = useFactionCardStyles(faction);
  let factionImagePath = `${factionImagePathPrefix + faction.toLowerCase()}.png`;
  if (faction === 'Gatekeepers') factionImagePath = `${factionImagePathPrefix}gatekeeper.png`;
  const altTag = `${faction} - ${name}`;

  const paddingRight = {
    marginRight: '10px',
  };

  return (
    <Card as={Col} className="m-4" md={3} xs={10} bg="dark" text="white" style={factionStyles}>
      <Card.Header>{faction} <img src={factionImagePath} alt={altTag} style={{ height: '1.3rem' }} /></Card.Header>
      {/* placeholder image */}
      <Card.Img variant="top" src={image} style={{ height: '10rem' }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{desc}</Card.Subtitle>
        <Card.Text>
          <strong>DMG: </strong> {damage}/{maxdmg} <strong>SPD: </strong> {speed}/{maxspeed} <br />
          <strong>LEAP:</strong> {leap}/{maxleap} <strong>HP: </strong> {hp}/{maxhp} <br />
          <strong>MOVE: </strong>{move}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-center">
        <Button type="button" onClick={onFormOpen} style={paddingRight}>Edit</Button>
        <Button type="button" variant="danger" onClick={handleDelete}>Delete</Button>
      </Card.Footer>
    </Card>
  );
};

export default BeastCard;
