import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';

// import OverviewGallery from './components/overviewGallery.jsx';
import OverviewGallery from '../client/src/components/overviewGallery.jsx';

describe('OverviewGallery', () => {

  // temporary test to demonstrate wrapper and mount
  it(`Should specifically render the text 'Overview Gallery'.`, () => {
    const wrapper = mount(<OverviewGallery />);
    expect(wrapper.text()).toMatch('Overview Gallery');
  });

  it('Should render a component named OverviewGallery.', () => {
    const component = shallow(<OverviewGallery />);
    expect(component).toMatchSnapshot();
  });

});