import React, { useState } from 'react';
import BeastForm from './BeastForm';
import BeastCard from './BeastCard';

const EditableBeastCard = (props) => {
  const [editFormOpen, setEditFormOpen] = useState(false);
  const {
    faction, name, desc, move, damage, maxdmg, leap, maxleap, hp, maxhp, speed, maxspeed,
  } = props;
  if (editFormOpen) {
    return (
      <BeastForm
        faction={faction}
        name={name}
        desc={desc}
        move={move}
        damage={damage}
        maxdmg={maxdmg}
        leap={leap}
        maxleap={maxleap}
        hp={hp}
        maxhp={maxhp}
        speed={speed}
        maxspeed={maxspeed}
        onFormClose={() => setEditFormOpen(false)}
      />
    );
  }
  return (
    <BeastCard
      faction={faction}
      name={name}
      desc={desc}
      move={move}
      damage={damage}
      maxdmg={maxdmg}
      leap={leap}
      maxleap={maxleap}
      hp={hp}
      maxhp={maxhp}
      speed={speed}
      maxspeed={maxspeed}
      onFormOpen={() => setEditFormOpen(true)}
    />
  );
};

export default EditableBeastCard;
