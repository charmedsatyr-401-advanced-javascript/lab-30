import React from 'react';

const Form = props => (
  <form id="search-form">
    <label htmlFor="search">Search for a location</label>
    <input type="text" name="search" id="input-search" placeholder="Enter a location here" />
    <button type="submit" onClick={props.handleSubmit}>
      Explore!
    </button>
  </form>
);

export default Form;
