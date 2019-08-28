/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { Component } from 'react';
import { connect } from 'react-redux';

import ReUsableAccordion from './ReUsable/AccordionCard';

const mapStateToProps = state => ({
  factions: state.factions,
});

class FactionAccordion extends Component {
  render() {
    return ReUsableAccordion('Factions', this.props.factions);
  }
}

export default connect(mapStateToProps)(FactionAccordion);
