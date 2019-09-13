/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Col, Row } from 'react-bootstrap';

import ReUsableAccordion from './ReUsable/AccordionCard';

import './Text.css';

const mapStateToProps = state => ({
  factions: state.factions,
});

class FactionAccordion extends Component {
  bannerBuilder = (faction, value) => (
    <Col
      md={{ span: 1, order: value }}
      className="d-none d-md-block d-sm-none custom-column-banner"
    >
      <img src={faction.logo} alt={faction.name} className="custom-logo custom-column-logo" />
      <img src={faction.banner} alt={faction.name} className="custom-banner" />
    </Col>
  )

  render() {
    return (
      <Row className="flex-row" style={{ margin: '0' }}>
        {this.bannerBuilder(this.props.factions[0], 1)}
        {this.bannerBuilder(this.props.factions[1], 2)}
        <Col md={{ span: 8, order: 3 }} xs={{ span: 12, order: 1 }}>
          <h1 className="text-center custom-title">FACTIONS</h1>
          {ReUsableAccordion('Factions', this.props.factions)}
        </Col>
        {this.bannerBuilder(this.props.factions[2], 3)}
        {this.bannerBuilder(this.props.factions[3], 4)}
      </Row>
    );
  }
}

export default connect(mapStateToProps)(FactionAccordion);
