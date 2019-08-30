/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import { connect } from 'react-redux';

import ReUsableAccordion from './ReUsable/AccordionCard';


const mapStateToProps = state => ({
  beasts: state.beasts,
  augments: state.augments,
});

class BestiaryAccordion extends Component {
  render() {
    return ReUsableAccordion('Bestiary', this.props.beasts);
  }
}

export default connect(mapStateToProps)(BestiaryAccordion);
