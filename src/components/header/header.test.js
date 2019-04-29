import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Header from './header.js';

describe('<Header/>', () => {
  it('is alive at application start', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('header').exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
