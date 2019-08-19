import React from 'react';

import EditableBeastCard from './EditableBeastCard';

const EditableBeastList = (props) => {
  const { onFormSubmit } = props;
  const beasts = props.beasts.map(factionBeasts => factionBeasts.beasts.map(beast => (
    <EditableBeastCard
      {...beast}
      faction={factionBeasts.faction}
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
