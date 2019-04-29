import React from 'react';
import { shallow } from 'enzyme';

import Form from './form';

describe('<Form/> component', () => {
  it('should render without crashing', () => {
    const handleSubmit = jest.fn();
    const wrapper = shallow(<Form handleSubmit={handleSubmit} />);
    const form = wrapper.find('form');
    expect(form).toBeDefined();
  });
  it('should call its `handleSubmit` prop on button click', () => {
    const handleSubmit = jest.fn();
    const wrapper = shallow(<Form handleSubmit={handleSubmit} />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(handleSubmit).toHaveBeenCalled();
  });
});
