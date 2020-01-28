import React from 'react';
import { render } from 'enzyme';
import Character from './Character';

describe('Character component', () => {
  it('renders Character', () => {
    const wrapper = render(<Character status="Alive" species="Human" gender="Female" origin="Earth" lastLocation="Mars" />);
    expect(wrapper).toMatchSnapshot();
  });
});