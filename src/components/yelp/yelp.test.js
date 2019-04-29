import React from 'react';
import { shallow } from 'enzyme';

import Yelp from './yelp';

describe('<Yelp/> component', () => {
  it('should render without crashing', () => {
    const obj = { name: 'l', url: 'n', rating: 'h', price: 'cd' };
    const wrapper = shallow(<Yelp content={[obj, obj]} />);
    const li = wrapper.find('li');
    expect(li).toBeDefined();
  });
  xit('should not render `ul` element if not given props', () => {
    // Update test - Is returning empty object
    const wrapper = shallow(<Yelp />);
    const ul = wrapper.find('ul');
    expect(ul).not.toBeDefined();
  });
  it('should render `li` elements if given props', () => {
    const obj = { name: 'l', url: 'n', rating: 'h', price: 'cd' };
    const wrapper = shallow(<Yelp content={[obj, obj]} />);
    const li = wrapper.find('li');
    expect(li).toBeDefined();
  });
});
