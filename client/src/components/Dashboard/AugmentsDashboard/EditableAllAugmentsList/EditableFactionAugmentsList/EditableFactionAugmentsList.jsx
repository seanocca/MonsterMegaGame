import React from 'react';
import { Row, Accordion, Card } from 'react-bootstrap';
import EditableAugmentCard from './EditableAugmentCard';

const EditableFactionAugmentsList = (props) => {
  const {
    faction, logo, factionAugments, onFormSubmit,
  } = props;
  if (factionAugments) {
    const factionAugmentsComponents = factionAugments.map(factionAugment => (
      <EditableAugmentCard
        {...factionAugment}
        faction={faction}
        onFormSubmit={onFormSubmit}
        key={factionAugment.id}
        logo={logo}
      />
    ));
    return (
      <Accordion>
        <Accordion.Toggle as={Card.Header}>
          <h2>{faction}</h2>
        </Accordion.Toggle>
        <Accordion.Collapse>
          <Row>
            {factionAugmentsComponents}
          </Row>
        </Accordion.Collapse>
      </Accordion>
    );
  } else {
    return (
      <Accordion>
        <Accordion.Toggle as={Card.Header}>
          <h2>{faction}</h2>
        </Accordion.Toggle>
      </Accordion>
    );
  }
};

export default EditableFactionAugmentsList;
