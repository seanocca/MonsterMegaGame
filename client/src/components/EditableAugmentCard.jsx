import React, { useState } from 'react';
import AugmentForm from './AugmentForm';
import AugmentCard from './AugmentCard';
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
  const [editFormopen, setEditFormOpen] = useState(false);
  const { faction, name, type, action, desc } = props;
  if (editFormopen) {
    return (
      <AugmentForm />
    );
  }
  return (
    <AugmentCard
      faction={faction}
      name={name}
      type={type}
      action={action}
      desc={desc}
    />
  )
};

export default EditableAugmentCard;
