import React from 'react';

import EditableAugmentCard from './EditableAugmentCard';

const EditableAugmentList = (props) => {
  const { onFormSubmit } = props;
  const augments = props.augments.map(factionAugments => factionAugments.augments.map(augment => (
    <EditableAugmentCard
      faction={factionAugments.faction}
      name={augment.name}
      type={augment.type}
      action={augment.action}
      desc={augment.desc}
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
