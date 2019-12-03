// import React from 'react';
// import { shallow } from 'enzyme';
// import OverviewGallery from './components/overviewGallery.jsx';

describe('Examining the syntax of Jest tests', () => {
  it('sums numbers', () => {
    expect(1 + 2).toEqual(3);
    expect(2 + 2).toEqual(4);
  });
});

// describe('OverviewGallery', () => {
//   it('should render something', () => {
//     const component = shallow(<OverviewGallery />);
//     expect(component).toMatchSnapshot();
//   });
// });