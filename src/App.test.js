import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('<App/> component', () => {
  it('renders without crashing', () => {
    const app = mount(<App />);
    expect(app.find('main').exists()).toBeTruthy();
  });
});
