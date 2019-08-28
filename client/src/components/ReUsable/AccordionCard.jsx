import React from 'react';

import { Accordion } from 'react-bootstrap';

import GameRules from './GameRulesBuilder';
// import Factions from './FactionBuilder';
// import Bestiary from './BestiaryBuilder';

import './ReUsableContent.css';

function checkPage(page, data) {
  if (page === 'Game Rules') {
    return GameRules.gameRuleDetails(data);
  }
  return <div />;
//   else if (page === 'Factions'){
//     return Factions
//   } else {
//     return Bestiary
//   }
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
