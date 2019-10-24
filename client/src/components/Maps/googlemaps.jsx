import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMapGL, { Marker } from 'react-map-gl';

import CityPin from './citypin';

const mapStateToProps = state => ({
  blocks: state.blocks,
});

const BLOCKS = [
  {
    name: 'A Block',
    latitude: -27.475863,
    longitude: 153.028042,
  },
  {
    name: 'B Block',
    latitude: -27.476229,
    longitude: 153.02845,
  },
  {
    name: 'C Block',
    latitude: -27.478272,
    longitude: 153.027887,
  },
  {
    name: 'D Block',
    latitude: -27.476081,
    longitude: 153.027741,
  },
  {
    name: 'E Block',
    latitude: -27.476584,
    longitude: 153.028184,
  },
  {
    name: 'F Block',
    latitude: -27.476272,
    longitude: 153.027456,
  },
  {
    name: 'G Block',
    latitude: -27.476552,
    longitude: 153.027701,
  },
  {
    name: 'H Block',
    latitude: -27.476798,
    longitude: 153.027901,
  },
  {
    name: 'J Block',
    latitude: -27.476577,
    longitude: 153.027295,
  },
  {
    name: 'M Block',
    latitude: -27.477411,
    longitude: 153.027894,
  },
  {
    name: 'N Block',
    latitude: -27.477336,
    longitude: 153.029110,
  },
  {
    name: 'O Block',
    latitude: -27.477765,
    longitude: 153.028254,
  },
  {
    name: 'P Block',
    latitude: -27.478181,
    longitude: 153.029310,
  },
  {
    name: 'Q Block',
    latitude: -27.477142,
    longitude: 153.027580,
  },
  {
    name: 'R Block',
    latitude: -27.476839,
    longitude: 153.027182,
  },
  {
    name: 'S Block',
    latitude: -27.477498,
    longitude: 153.027307,
  },
  {
    name: 'U Block (QUT Museum)',
    latitude: -27.476676,
    longitude: 153.028889,
  },
  {
    name: 'V Block (HiQ)',
    latitude: -27.477022,
    longitude: 153.028380,
  },
  {
    name: 'W Block',
    latitude: -27.476565,
    longitude: 153.026900,
  },
  {
    name: 'X Block',
    latitude: -27.477374,
    longitude: 153.030013,
  },
  {
    name: 'Y Block',
    latitude: -27.477712,
    longitude: 153.029871,
  },
  {
    name: 'Z Block',
    latitude: -27.477772,
    longitude: 153.027616,
  },
  {
    name: 'Artisans',
    latitude: -27.476414,
    longitude: 153.027898,
  },
];

class SimpleMap extends Component {
  state = {
    viewport: {
      width: 600,
      height: 600,
      latitude: -27.477390,
      longitude: 153.028329,
      zoom: 16.9,
      bearing: 49,
    },
  };

  renderCityMarker = (city, index) => (
    <Marker key={`marker-${index}`} longitude={city.longitude} latitude={city.latitude}>
      <CityPin size={20} />
    </Marker>
  );

  render() {
    return (
      <ReactMapGL
        style={{
          margin: '0 auto',
        }}
        mapboxApiAccessToken="pk.eyJ1IjoiaGFsZm1vbnN0ZXJnYW1lcyIsImEiOiJjazFsbWcyMzcwNGpwM2RwaTZtajhvY3piIn0.aHsV6SboffgREmPS6Z_8yg"
        mapStyle="mapbox://styles/halfmonstergames/ck1lmp6vi0gfq1ckfofw8lgrl"
        {...this.state.viewport}
        onViewportChange={viewport => this.setState({ viewport })}
        scrollZoom={false}
        dragPan={false}
        dragRotate={false}
        doubleClickZoom={false}
        touchZoom={false}
        touchRotate={false}
      >
        {BLOCKS.map(this.renderCityMarker)}
      </ReactMapGL>
    );
  }
}

export default connect(mapStateToProps)(SimpleMap);
