import React from 'react';

import EditableFactionAugmentsList from './EditableFactionAugmentsList';

const EditableAllAugmentsList = (props) => {
  const { allAugments, onFormSubmit } = props;
  const factionAugments = allAugments.map(factionAugments => (
    <EditableFactionAugmentsList
      faction={factionAugments.faction}
      factionAugments={factionAugments.augments}
      onFormSubmit={onFormSubmit}
      key={factionAugments.faction}
    />
  ));
  return (
    <div>
      { factionAugments }
    </div>
  );
};

export default EditableAllAugmentsList;
