import React from 'react';

import EditableFactionAugmentsList from './EditableFactionAugmentsList';

const EditableAllAugmentsList = (props) => {
  const { allAugments, onFormSubmit } = props;
  if (allAugments) {
    const factionAugments = allAugments.map(factionAugments => (
      <EditableFactionAugmentsList
        faction={factionAugments.faction}
        factionAugments={factionAugments.augments}
        onFormSubmit={onFormSubmit}
        key={factionAugments.faction}
        logo={factionAugments.logo}
      />
    ));
  return (
    <div>
      { factionAugments }
    </div>
  );
  } else {
    return <div />;
  }
};

export default EditableAllAugmentsList;
