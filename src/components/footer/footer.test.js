import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Footer from './footer.js';

describe('<Footer/>', () => {
  it('is alive at application start', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer').exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
