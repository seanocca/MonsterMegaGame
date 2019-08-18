import React from 'react';

import EditableBeastCard from './EditableBeastCard';

const EditableBeastList = (props) => {
  const { onFormSubmit } = props;
  const beasts = props.beasts.map(factionBeasts => factionBeasts.beasts.map(beast => (
    <EditableBeastCard
      faction={factionBeasts.faction}
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
      onFormSubmit={onFormSubmit}
    />
  )));
  return (
    <div id="beasts">
      {beasts}
    </div>
  );
};

export default EditableBeastList;
