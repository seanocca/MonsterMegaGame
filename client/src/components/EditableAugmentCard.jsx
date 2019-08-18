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

const EditableAugmentCard = (props) => {
  const { faction, name, type, action, desc } = props;
  const factionImagePath = factionImagePathPrefix + faction.toLowerCase() + '.png';
  const factionStyles = useFactionCardStyles(faction);
  const altTag = `${faction} - ${name}`;
  return (
    <Card bg="dark" text="white" style={factionStyles}>
      {/* placeholder image */}
      <Card.Img variant="top" src={Clamberer} />
      <Card.Body>
        <Card.Title>
          {faction} - {name} <img src={factionImagePath} alt={altTag} style={{ height: '1.3rem' }} />
        </Card.Title>
        <Card.Text>
          <strong>Type: </strong>{type}<br/>
          <strong>{action.toUpperCase()} - </strong> {desc}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        {/* Link currently not working yet */}
        <a href="">Edit Augment</a>
      </Card.Footer>
    </Card>
  );
};

export default EditableAugmentCard;
