import React from 'react';

const Movies = props => {
  const content =
    props.content && props.content.body
      ? props.content.body.map((item, index) => (
          <li key={index}>
            <p>
              <span>{item.title}</span> was relased on {item.released_on}. Out of {item.total_votes}{' '}
              total votes, {item.title} has an average vote of {item.average_votes} and a popularity
              score of {item.popularity}.
            </p>
            <img alt={item.title} src={item.image_url} />
            <p>{item.overview}</p>
          </li>
        ))
      : null;
  return content && <ul className="movies-results">{content}</ul>;
};

export default Movies;
