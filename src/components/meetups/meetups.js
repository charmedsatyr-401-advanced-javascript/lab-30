import React from 'react';

const Meetups = props => {
  const content =
    props.content && props.content.body
      ? props.content.body.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.name}</a>
            <p>Hosted by: {item.host}</p>
            <p>Created on: {item.creation_date}</p>
          </li>
        ))
      : null;
  return content && <ul className="meetups-results">{content}</ul>;
};

export default Meetups;
