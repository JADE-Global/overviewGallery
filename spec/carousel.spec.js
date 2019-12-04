import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';

import Carousel from '../client/src/components/carousel/carousel.jsx';

const imgPlaceholders = [
  {id: 1, img_url: 'https://i.imgur.com/yuTP4gp.jpg'},
  {id: 2, img_url: 'https://i.imgur.com/ETphUsB.jpg'},
  {id: 3, img_url: 'https://i.imgur.com/PTgFa7W.jpg'},
  {id: 4, img_url: 'https://i.imgur.com/Kdfy419.jpg'},
  {id: 5, img_url: 'https://i.imgur.com/BVzsH0n.jpg'},
];

describe('Carousel', () => {

  it('Should load images sent in as props.', () => {
    const wrapper = mount(<Carousel images={imgPlaceholders} />);
    expect(wrapper.find('img').length).toBe(5);    
    wrapper.unmount();
  });

  it('Should toggle popup when image is clicked.', () => {
    const wrapper = mount(<Carousel images={imgPlaceholders} />);
    const imgWrapper = wrapper.find('img');
    buttonWrapper.simulate('click');
    expect(wrapper.state().showPopup).toBeTruthy();
    wrapper.unmount();
  });

});

