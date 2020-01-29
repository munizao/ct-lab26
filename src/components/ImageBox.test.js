import React from 'react';
import { shallow } from 'enzyme';
import ImageBox from './ImageBox';

describe('ImageBox component', () => {
  it('renders ImageBox', () => {
    const wrapper = shallow(<ImageBox id="132" name="Gar's Mytholog" />);
    expect(wrapper).toMatchSnapshot();
  });
});
