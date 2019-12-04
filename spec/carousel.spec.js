import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';

import Carousel from '../client/src/components/carousel/carousel.jsx';

let imgPlaceholders = [
  {id: 1, img_url: 'https://i.imgur.com/yuTP4gp.jpg'},
  {id: 2, img_url: 'https://i.imgur.com/ETphUsB.jpg'},
  {id: 3, img_url: 'https://i.imgur.com/PTgFa7W.jpg'},
  {id: 4, img_url: 'https://i.imgur.com/Kdfy419.jpg'},
  {id: 5, img_url: 'https://i.imgur.com/BVzsH0n.jpg'},
];

describe('Carousel', () => {

  it('Should load all images sent in as props.', () => {
    const wrapper = mount(<Carousel images={imgPlaceholders} />);
    expect(wrapper.find('img').length).toBe(5);
    wrapper.unmount();
  });

  it('Should have image with specific tag.', () => {
    imgPlaceholders[0].id = 'TEST_ID';
    const wrapper = mount(<Carousel images={imgPlaceholders} />);
    expect(wrapper.find({id: '#carouselImg-TEST_ID'}).length).toBe(1);
    expect(wrapper.find({src: 'https://i.imgur.com/ETphUsB.jpg'}).length).toBe(1);
    wrapper.unmount();
    imgPlaceholders[0].id = 1;
  });

  it('Should fire event handler when image is clicked.', () => {
    const mockFn = jest.fn();
    const wrapper = mount(<Carousel images={imgPlaceholders} clickHandler={mockFn} />);
    expect(wrapper.find({id: '#carouselImg-1'}).length).toBe(1);
    wrapper.find({id: '#carouselImg-1'}).simulate('click');
    expect(mockFn).toBeCalled();
    wrapper.unmount();
  });

});

