import React from 'react';
import { shallow } from 'enzyme';
import Title from './Title';

describe('Title component', () => {
  it('renders Title', () => {
    const wrapper = shallow(<Title id="132" name="Gar's Mytholog" />);
    expect(wrapper).toMatchSnapshot();
  });
});
