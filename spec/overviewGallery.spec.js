import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';

import OverviewGallery from '../client/src/components/overviewGallery.jsx';

describe('OverviewGallery', () => {

  it('Should render a component named OverviewGallery.', () => {
    const component = shallow(<OverviewGallery />);
    expect(component).toMatchSnapshot();
  });

  // Temporary test to test event handlers
  it('Should toggle showPopup state when button is clicked.', () => {
    const wrapper = mount(<OverviewGallery />);
    const buttonWrapper = wrapper.find('button');
    buttonWrapper.simulate('click');
    expect(wrapper.state().showPopup).toBeTruthy();
    wrapper.unmount();
  });

});