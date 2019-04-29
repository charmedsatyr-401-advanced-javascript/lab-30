import React from 'react';

const DarkSky = props => {
  const content =
    props.content && props.content.body
      ? props.content.body.map((item, index) => (
          <li key={index}>
            The forecast for {item.time} is: {item.forecast}
          </li>
        ))
      : null;
  return content && <ul className="weather-results">{content}</ul>;
};

export default DarkSky;
