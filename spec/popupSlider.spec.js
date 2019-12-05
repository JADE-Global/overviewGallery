import React from 'react';
import { shallow, mount } from 'enzyme';

import PopupSlider from '../client/src/components/popup/popup.jsx';

let imgPlaceholder = [
  {id: 1, img_url: 'https://i.imgur.com/yuTP4gp.jpg'}
];
    
describe('PopupSlider', () => {

  it('Should be rendering exactly one image.', () => {
    const wrapper = mount(<Popup image={imgPlaceholder} />);
    expect(wrapper.find('img').length).toBe(1);
    wrapper.unmount();
  });

  it('Should be showing user information.', () => {
    const wrapper = mount(<Popup image={imgPlaceholder} />);
    expect(wrapper.find('TEMP_NAME').length).toBe(1);
    wrapper.unmount();
  });
  
  it('Should fire event handlers when left and right arrows are clicked.', () => {
    const mockFn = jest.fn();
    const wrapper = mount(<Popup clickHandler={mockFn} />);
    wrapper.find({id: '#leftArrow'}).simulate('click');
    expect(mockFn).toBeCalled();
    wrapper.find({id: '#rightArrow'}).simulate('click');
    expect(mockFn).toBeCalled();
    wrapper.unmount();
  });

});