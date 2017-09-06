# ReGoMap  [![Build Status](https://travis-ci.org/hermawan22/regomap.svg?branch=master)](https://travis-ci.org/hermawan22/regomap)

Wrapper google maps API for react.

## How to install

```javascript
npm install regomap
```

## Usage

```javascript
import React from 'react;
import ReGoMap from 'regomap';

const mapStyle = {
  width: "100%",
  height: "500px",
};
const center = {
  lat: -0.789275,
  lng: 113.921327,
}
const Map = () => <ReGoMap zpp mapStyle={mapStyle} center={center} zoom={5} />;
```

**Note**: This wrapper under development, i will appreciate every advice, issue, or PR.