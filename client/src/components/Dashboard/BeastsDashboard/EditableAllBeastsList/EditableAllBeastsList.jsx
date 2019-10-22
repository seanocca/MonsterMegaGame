import React from 'react';

import EditableFactionBeastsList from './EditableFactionBeastsList';

const EditableAllBeastsList = (props) => {
  const { allBeasts, onFormSubmit } = props;
  const factionBeasts = allBeasts.map(factionbeasts => (
    <EditableFactionBeastsList
      faction={factionbeasts.faction}
      factionBeasts={factionbeasts.beasts}
      onFormSubmit={onFormSubmit}
      key={factionbeasts.faction}
    />
  ));
  return (
    <div>
      { factionBeasts }
    </div>
  );
};

export default EditableAllBeastsList;
