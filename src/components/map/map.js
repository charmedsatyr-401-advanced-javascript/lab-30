import React from 'react';

const Map = props => (
  <img
    id="map"
    className={!props.location && 'hide'}
    src={
      props.location &&
      `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.latitude}%2c%20${
        props.location.longitude
      }&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyDp0Caae9rkHUHwERAFzs6WN4_MuphTimk`
    }
    alt="Map of search query"
  />
);

export default Map;
