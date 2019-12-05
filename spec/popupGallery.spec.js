import React from 'react';
import { shallow, mount } from 'enzyme';

import PopupGallery from '../client/src/components/popup/popup.jsx';

let imgPlaceholders = [
  {id: 1, img_url: 'https://i.imgur.com/yuTP4gp.jpg'},
  {id: 2, img_url: 'https://i.imgur.com/ETphUsB.jpg'},
  {id: 3, img_url: 'https://i.imgur.com/PTgFa7W.jpg'},
  {id: 4, img_url: 'https://i.imgur.com/Kdfy419.jpg'},
  {id: 5, img_url: 'https://i.imgur.com/BVzsH0n.jpg'},
];

let locationPlaceholder = {
  id: 42,
  name: 'LOCATION_PLACEHOLDER'
};

describe('PopupGallery', () => {

  it('Should render location name.', () => {
    const wrapper = mount(<PopupGallery location={locationPlaceholder} />);
    expect(wrapper.find('LOCATION_PLACEHOLDER').length).toBe(1);
    wrapper.unmount();
  });

  it('Should dynamically render image count.', () => {
    const wrapper = mount(<PopupGallery images={imgPlaceholders} />);
    expect(wrapper.find('5').length).toBe(1);
    wrapper.unmount();
  });

  it('Should load all images given.', () => {
    const wrapper = mount(<PopupGallery images={imgPlaceholders} />);
    expect(wrapper.find('img').length).toBe(5);
    wrapper.unmount();
  });
  
  it('Should fire event handler if an image is clicked.', () => {
    const mockFn = jest.fn();
    const wrapper = mount(<PopupGallery images={imgPlaceholders} clickHandler={mockFn} />);
    wrapper.find({id: '#carouselImg-1'}).simulate('click');
    expect(mockFn).toBeCalled();
    wrapper.unmount();
  });

});