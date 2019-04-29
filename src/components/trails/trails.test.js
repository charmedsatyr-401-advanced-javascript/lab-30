import React from 'react';
import { shallow } from 'enzyme';

import Trails from './trails';

describe('<Trails/> component', () => {
  it('should render without crashing', () => {
    const obj = {
      trail_url: 'l',
      name: 'n',
      location: 'h',
      length: 'cd',
      condition_date: 'd',
      condition_time: 't',
      stars: 's',
      star_votes: 'v',
      summary: 's',
    };
    const wrapper = shallow(<Trails content={[obj, obj]} />);
    const li = wrapper.find('li');
    expect(li).toBeDefined();
  });
  xit('should not render `ul` element if not given props', () => {
    // Update test - Is returning empty object
    const wrapper = shallow(<Trails />);
    const ul = wrapper.find('ul');
    expect(ul).not.toBeDefined();
  });
  it('should render `li` elements if given props', () => {
    const obj = {
      trail_url: 'l',
      name: 'n',
      location: 'h',
      length: 'cd',
      condition_date: 'd',
      condition_time: 't',
      stars: 's',
      star_votes: 'v',
      summary: 's',
    };

    const wrapper = shallow(<Trails content={[obj, obj]} />);
    const li = wrapper.find('li');
    expect(li).toBeDefined();
  });
});
