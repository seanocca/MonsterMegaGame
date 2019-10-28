import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMapGL, { Marker } from 'react-map-gl';

import CityPin from './citypin';

const mapStateToProps = state => ({
  blocks: state.blocks,
});

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
          width: '100%',
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
        {this.props.blocks.map(this.renderCityMarker)}
      </ReactMapGL>
    );
  }
}

export default connect(mapStateToProps)(SimpleMap);
