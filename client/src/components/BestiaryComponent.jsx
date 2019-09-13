/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReUsableAccordion from './ReUsable/AccordionCard';

import './Text.css';

const mapStateToProps = state => ({
  beasts: state.beasts,
  augments: state.augments,
});

class BestiaryAccordion extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center custom-title">BESTIARY</h1>
        {ReUsableAccordion('Bestiary', this.props.beasts)}
        <h1 className="text-center custom-title">AUGMENTS</h1>
        {ReUsableAccordion('Augments', this.props.augments)}
      </div>
    );
  }
}

export default connect(mapStateToProps)(BestiaryAccordion);
