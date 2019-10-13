import React from 'react';
import { Card, Button } from 'react-bootstrap';

import { useFactionCardStyles } from '../../../../../../../helpers/hooks';

const factionImagePathPrefix = '/img/factions/';

const AugmentCard = (props) => {
  const {
    faction, name, type, action, desc, onFormOpen, image,
  } = props;
  const factionStyles = useFactionCardStyles(faction);
  let factionImagePath = `${factionImagePathPrefix + faction.toLowerCase()}.png`;
  if (faction === 'Gatekeepers') factionImagePath = `${factionImagePathPrefix}gatekeeper.png`;
  const altTag = `${faction} - ${name}`;

  return (
    <Card bg="dark" text="white" style={factionStyles}>
      <Card.Header>{faction} <img src={factionImagePath} alt={altTag} style={{ height: '1.3rem' }} /></Card.Header>
      {/* placeholder image */}
      <Card.Img variant="top" src={image} style={{ height: '10rem' }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="text-muted">{type}</Card.Subtitle>
        <Card.Text>{action}: {desc}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button type="button" onClick={onFormOpen}>Edit Augment</Button>
      </Card.Footer>
    </Card>
  );
};

export default AugmentCard;
