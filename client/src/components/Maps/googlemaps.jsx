import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

// eslint-disable-next-line react/prefer-stateless-function
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -27.476824,
      lng: 153.028403,
    },
    zoom: 18,
    gestureHandling: false,
    zoomControl: false,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCmxkBpPgTbS95xCAt1YgS0Hd1O1gM0mDo' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          draggable={this.props.gestureHandling}
          options={{
            zoomControl: this.props.zoomControl,
            mapTypeId: 'satellite',
            heading: 90,
          }}
        />
      </div>
    );
  }
}

export default SimpleMap;
