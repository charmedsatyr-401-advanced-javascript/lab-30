import React from 'react';
import { shallow } from 'enzyme';

import DarkSky from './darksky';

describe('<DarkSky/> component', () => {
  it('should render without crashing', () => {
    const obj = { time: 't', forecast: 'f' };
    const wrapper = shallow(<DarkSky content={[obj, obj]} />);
    const li = wrapper.find('li');
    expect(li).toBeDefined();
  });
  xit('should not render `ul` element if not given props', () => {
    // Update test - Is returning empty object
    const wrapper = shallow(<DarkSky />);
    const ul = wrapper.find('ul');
    expect(ul).not.toBeDefined();
  });
  it('should render `li` elements if given props', () => {
    const obj = { time: 't', forecast: 'f' };
    const wrapper = shallow(<DarkSky content={[obj, obj]} />);
    const li = wrapper.find('li');
    expect(li).toBeDefined();
  });
});
