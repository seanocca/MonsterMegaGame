/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoreButtons from './LoreButtons';

import ReUsabaleStaticCard from './ReUsable/StaticCard';

import './Buttons.css';
import './Text.css';

const mapStateToProps = state => ({
  overview: state.overview,
  rift: state.rift,
});

class LoreInfo extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center custom-title">LORE</h1>
        {ReUsabaleStaticCard(this.props.overview)}
        {ReUsabaleStaticCard(this.props.rift)}
        <LoreButtons />
      </div>
    );
  }
}

export default connect(mapStateToProps)(LoreInfo);
