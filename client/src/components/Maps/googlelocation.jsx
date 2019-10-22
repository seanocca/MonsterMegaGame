import { GoogleComponent } from 'react-google-location';

// ...
import React, { Component } from 'react';


const API_KEY = 'AIzaSyCmxkBpPgTbS95xCAt1YgS0Hd1O1gM0mDo'; // how to get key - step are below

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: null,
    };
  }

  render() {
    return (
      <GoogleComponent
        apiKey={API_KEY}
        language="en"
        country="country:in|country:au"
        coordinates
        locationBoxStyle="custom-style"
        locationListStyle="custom-style-list"
        onChange={(e) => { this.setState({ place: e }); }}
      />
    );
  }
}


export default HomeComponent;
