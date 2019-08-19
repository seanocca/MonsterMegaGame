import React from 'react';
import { Card } from 'react-bootstrap';

import { useFactionCardStyles } from '../helpers/hooks';
import Clamberer from '../images/monsters/clamberer.png';


const factionImagePathPrefix = '/img/factions/';

const AugmentCard = (props) => {
  const {
    faction, name, type, action, desc,
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
        <Card.Subtitle className="text-muted">{type}</Card.Subtitle>
        <Card.Text>{action}: {desc}</Card.Text>
      </Card.Body>
      <Card.Footer>
        {/* Link currently not working yet */}
        <a href="/#">Edit Augment</a>
      </Card.Footer>
    </Card>
  );
};

export default AugmentCard;
