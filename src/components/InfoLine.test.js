import React from 'react';
import { shallow } from 'enzyme';
import InfoLine from './InfoLine';

describe('InfoLine component', () => {
  it('renders InfoLine', () => {
    const wrapper = shallow(<InfoLine lineHead="STATUS" value="Alive" />);
    expect(wrapper).toMatchSnapshot();
  });
});
