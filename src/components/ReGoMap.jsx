/* eslint-disable */

import React, { Component } from "react";
import loadJS from "../lib/script";

const mapStyle = {
  width: "100%",
  height: "500px",
};
class ReGoMap extends Component {
  componentDidMount() {
    window.initMap = this.initMap;
    loadJS("https://maps.googleapis.com/maps/api/js?key=AIzaSyC_MS9uR5qeLcv9gS-gVbhe9Kck6zeGNQI&callback=initMap");
  }
  initMap = () => {
    const options = {
      zoom: 8,
      center: { lat: 42.3601, lng: -71.0589 },
    };

    // New map
    this.map = new google.maps.Map(this.map, options);
  };
  render() {
    return (
      <div>
        <div
          style={mapStyle}
          ref={input => {
            this.map = input;
          }}
        />
      </div>
    );
  }
}

export default ReGoMap;
