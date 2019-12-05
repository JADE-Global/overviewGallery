import React from 'react';
import { shallow, mount } from 'enzyme';

import OverviewGallery from '../client/src/components/overviewGallery.jsx';
import Carousel from '../client/src/components/carousel/carousel.jsx';
import Popup from '../client/src/components/popup/popup.jsx';

describe('OverviewGallery', () => {

  it('Should render a component named OverviewGallery.', () => {
    const component = shallow(<OverviewGallery />);
    expect(component).toMatchSnapshot();
  });

  it('Should have a child component named Carousel.', () => {
    const wrapper = mount(<OverviewGallery />);
    expect(wrapper.find(Carousel).length).toBe(1);
    wrapper.unmount();
  });

  it('Should have a child component named Popup appear only after button is clicked.', () => {
    const wrapper = mount(<OverviewGallery />);
    expect(wrapper.find(Popup).length).toBe(0);
    // figure out how to click button
    // click button
    wrapper.update();
    expect(wrapper.find(Popup).length).toBe(1);
    wrapper.unmount();
  });

});