/* eslint-disable */

import React, { Component } from "react";
import loadJS from "./lib/script";

const defaultMapStyle = {
  width: "100%",
  height: "100%",
};

const defaultCenter = {
  lat: -0.789275,
  lng: 113.921327,
};

class ReGoMap extends Component {
  componentDidMount() {
    window.initMap = this.initMap;
    loadJS("https://maps.googleapis.com/maps/api/js?key=AIzaSyC_MS9uR5qeLcv9gS-gVbhe9Kck6zeGNQI&callback=initMap");
  }
  initMap = () => {
    const { center, zoom } = this.props;
    const options = {
      zoom: zoom ? zoom : 5,
      center: center ? center : defaultCenter,
    };

    // New map
    this.map = new google.maps.Map(this.map, options);
  };
  render() {
    const { mapStyle } = this.props;
    return (
      <div>
        <div
          style={mapStyle ? mapStyle : defaultMapStyle}
          ref={input => {
            this.map = input;
          }}
        />
      </div>
    );
  }
}

export default ReGoMap;
