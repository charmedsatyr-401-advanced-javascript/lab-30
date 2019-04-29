import React from 'react';
import { shallow } from 'enzyme';

import Map from './map';

describe('<Map/> component', () => {
  it('should render without crashing', () => {
    const obj = { location: { latitude: 1, longitude: 2 } };
    const wrapper = shallow(<Map location={obj} />);
    expect(wrapper).toBeDefined();
  });
  it('should render an `img` elemens if given props', () => {
    const obj = { location: { latitude: 1, longitude: 2 } };
    const wrapper = shallow(<Map location={obj} />);
    const img = wrapper.find('img');
    expect(img).toBeDefined();
  });
});
