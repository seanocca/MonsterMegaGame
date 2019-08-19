import React from 'react';

import EditableAugmentCard from './EditableAugmentCard';

const EditableAugmentList = (props) => {
  const { onFormSubmit } = props;
  const augments = props.augments.map(factionAugments => factionAugments.augments.map(augment => (
    <EditableAugmentCard
      {...augment}
      faction={factionAugments.faction}
      onFormSubmit={onFormSubmit}
    />
  )));
  return (
    <div id="augments">
      {augments}
    </div>
  );
};

export default EditableAugmentList;
