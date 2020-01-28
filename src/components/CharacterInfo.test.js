import React from 'react';
import { shallow } from 'enzyme';
import CharacterInfo from './CharacterInfo';

describe('CharacterInfo component', () => {
  it('renders CharacterInfo', () => {
    const wrapper = shallow(<CharacterInfo status="Alive" species="Human" gender="Female" origin="Earth" lastLocation="Mars" />);
    expect(wrapper).toMatchSnapshot();
  });
});

