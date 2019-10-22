/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReUsableAccordion from './ReUsable/AccordionCard';

import './Text.css';

const mapStateToProps = state => ({
  gamerules: state.gamerules,
});

class GameRulesAccordion extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center custom-title">GAME RULES</h1>
        {ReUsableAccordion('Game Rules', this.props.gamerules)}
      </div>
    );
  }
}

export default connect(mapStateToProps)(GameRulesAccordion);
