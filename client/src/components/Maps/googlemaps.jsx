import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

class SimpleMap extends Component {
  state = {
    viewport: {
      width: 600,
      height: 600,
      latitude: -27.476824,
      longitude: 153.028403,
      zoom: 16.4,
      bearing: 50,
    },
  };

  render() {
    return (
      <ReactMapGL
        style={{
          margin: '0 auto',
        }}
        mapboxApiAccessToken='pk.eyJ1IjoiaGFsZm1vbnN0ZXJnYW1lcyIsImEiOiJjazFsbWcyMzcwNGpwM2RwaTZtajhvY3piIn0.aHsV6SboffgREmPS6Z_8yg'
        mapStyle='mapbox://styles/halfmonstergames/ck1lmp6vi0gfq1ckfofw8lgrl'
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        scrollZoom={false}
        dragPan={false}
        dragRotate={false}
        doubleClickZoom={false}
        touchZoom={false}
        touchRotate={false}
      />
    );
  }
}

export default SimpleMap;
