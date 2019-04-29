import React from 'react';

const Yelp = props => {
  const content =
    props.content && props.content.body
      ? props.content.body.map((item, index) => (
          <li key={index}>
            <a href={item.url}>{item.name}</a>
            <p>
              The average rating is {item.rating} out of 5 and the average cost is {item.price} our
              of 4
            </p>
            <img alt={`${item.name}`} src={item.image_url} />
          </li>
        ))
      : null;
  return content && <ul className="yelp-results">{content}</ul>;
};

export default Yelp;
