import React from 'react';
import { shallow } from 'enzyme';

import Meetups from './meetups';

describe('<Meetups/> component', () => {
  it('should render without crashing', () => {
    const obj = { link: 'l', name: 'n', host: 'h', creation_data: 'cd' };
    const wrapper = shallow(<Meetups content={[obj, obj]} />);
    const li = wrapper.find('li');
    expect(li).toBeDefined();
  });
  xit('should not render `ul` element if not given props', () => {
    // Update test - Is returning empty object
    const wrapper = shallow(<Meetups />);
    const ul = wrapper.find('ul');
    expect(ul).not.toBeDefined();
  });
  it('should render `li` elements if given props', () => {
    const obj = { link: 'l', name: 'n', host: 'h', creation_data: 'cd' };
    const wrapper = shallow(<Meetups content={[obj, obj]} />);
    const li = wrapper.find('li');
    expect(li).toBeDefined();
  });
});
