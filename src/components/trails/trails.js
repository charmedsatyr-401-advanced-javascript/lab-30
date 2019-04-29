import React from 'react';

const Trails = props => {
  const content =
    props.content && props.content.body
      ? props.content.body.map((item, index) => (
          <li key={index}>
            <p>
              Hike Name: <a href={item.trail_url}>{item.name}</a>, Location: {item.location},
              Distance: {item.length} miles
            </p>
            <p>
              On {item.condition_date} at {item.condition_time}, trail conditions were reported as:{' '}
              {item.conditions}
            </p>
            <p>
              This trail has a rating of {item.stars} stars (out of {item.star_votes} votes)
            </p>
            <p>{item.summary}</p>
          </li>
        ))
      : null;
  return content && <ul className="trails-results">{content}</ul>;
};

export default Trails;
