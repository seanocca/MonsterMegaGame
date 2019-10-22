import React from 'react';

import { Accordion } from 'react-bootstrap';

import GameRules from './GameRulesBuilder';
import Factions from './FactionBuilder';
import Bestiary from './BestiaryBuilder';
import Augments from './AugmentBuilder';

import './ReUsableContent.css';

function checkPage(page, data) {
  if (page === 'Game Rules') {
    return GameRules.gameRuleDetails(data);
  }
  if (page === 'Factions') {
    return Factions.factionBuilder(data);
  }
  if (page === 'Bestiary') {
    return Bestiary.bestiaryBuilder(data);
  }
  if (page === 'Augments') {
    return Augments.augmentsBuilder(data);
  }
  return <div />;
}

/* ------------------- Main Function -------------------- */

function ReUsableAccordion(page, data) {
  return (
    <Accordion className="text-center custom-accordion">
      {checkPage(page, data)}
    </Accordion>
  );
}

export default ReUsableAccordion;
