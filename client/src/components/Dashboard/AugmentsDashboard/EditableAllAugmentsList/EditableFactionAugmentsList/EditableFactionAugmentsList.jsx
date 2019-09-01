import React from 'react';
import { CardColumns, Accordion, Card } from 'react-bootstrap';
import EditableAugmentCard from './EditableAugmentCard';

const EditableFactionAugmentsList = (props) => {
  const { faction, factionAugments, onFormSubmit } = props;
  const factionAugmentsComponents = factionAugments.map(factionAugment => (
    <EditableAugmentCard
      {...factionAugment}
      faction={faction}
      onFormSubmit={onFormSubmit}
    />
  ));
  return (
    <div>
      <Accordion>
        <Accordion.Toggle as={Card.Header}>
          <h2>{faction}</h2>
        </Accordion.Toggle>
        <Accordion.Collapse>
          <CardColumns>
            {factionAugmentsComponents}
          </CardColumns>
        </Accordion.Collapse>
      </Accordion>
    </div>
  );
};

export default EditableFactionAugmentsList;
